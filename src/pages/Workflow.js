import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import Nomessages from '../components/Nomessage';
import WorkFowContainer from '../components/WorkFlowContainer';
import { useBeforeunload } from 'react-beforeunload';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    mainBlock: {
        height: '100px',
        padding: '24px',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap:'unset',
        ["@media (max-width:475px)"]: {
             height: 'unset' ,
             flexWrap:'wrap',
            }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        bottom: '10px',
        width:'unset',
        ["@media (max-width:475px)"]: {
            width:'100%',
            margin: theme.spacing(0),
            marginTop:'24px'
           }
    },
    create: {
        textTransform: 'capitalize',
        padding: '24px',
        backgroundColor: '#14bc50',
        marginLeft: 'auto',
        width:'unset',
        '&:hover': {
            backgroundColor: '#14bc50'
        },
        ["@media (max-width:475px)"]: {
            width:'100%'
           }
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '24px'
    }
}));

const WorkFlow = (props) => {

    const classes = useStyles();

    const workFlow = useSelector(state => state.workFlow || {});

    const [WorkFlowData, setWorkFlowData] = useState(workFlow);

    const [filterValue, setFilterValue] = useState("ALL");

    const [searchdataValue, setSeachValue] = useState('')

    const dispatch = useDispatch();

    const createWorkflow = (event) => {
        const workData = { ...workFlow };
        const workFlowId = uuidv4();
        const workFlowName = '';
        workData[workFlowId] = {
            workFlowName: '',
            workFlowId,
            taskData: [],
            workFlowStatus: 'PENDING'
        }
        dispatch({
            type: "UPDATEWORKFLOW",
            updatedWorkFlow: workData
        })
        dispatch({
            type: "TASKDATA",
            updatedWorkFlowId: workFlowId,
            updatedWorkFlowname: workFlowName
        })
        setWorkFlowData(workData)
        props.history.push('/create');
    }

    const deleteData = (deleteId) => {
        const data = { ...workFlow }
        delete data[deleteId];
        const previousData = { ...WorkFlowData }
        delete previousData[deleteId];
        setWorkFlowData(previousData)
        dispatch({
            type: "UPDATEWORKFLOW",
            updatedWorkFlow: data
        })
    }

    const modifyStatus = (statusId, status) => {
        const data = { ...workFlow };
        data[statusId].workFlowStatus = status;
        const previousData = { ...WorkFlowData }
        previousData[statusId].workFlowStatus = status;
        setWorkFlowData(previousData)
        dispatch({
            type: "UPDATEWORKFLOW",
            updatedWorkFlow: data
        })
    }

    const cardClick = (id, name) => {
        dispatch({
            type: "TASKDATA",
            updatedWorkFlowId: id,
            updatedWorkFlowname: name
        })
        props.history.push('/create');
    }


    const searchValue = (event) => {
        const input = event.target.value;

        if (input === "") {
            setWorkFlowData(workFlow);
        } else {
            const searchObj = {}
            for (let key in workFlow) {
                if (workFlow[key].workFlowName.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
                    searchObj[key] = workFlow[key]
                }
            }
            setWorkFlowData(searchObj);
        }
        setSeachValue(input);
    }

    const handleFilterChange = (event) => {
        setSeachValue('')
        const filter = event.target.value;
        if (filter === 'ALL') {
            setWorkFlowData(workFlow);
        } else if (filter === 'PENDING') {
            const searchObj = {}
            for (let key in workFlow) {
                if (workFlow[key].workFlowStatus === "PENDING") {
                    searchObj[key] = workFlow[key]
                }
            }
            setWorkFlowData(searchObj);

        } else if (filter === "COMPLETED") {
            const searchObj = {}
            for (let key in workFlow) {
                if (workFlow[key].workFlowStatus === "COMPLETED") {
                    searchObj[key] = workFlow[key]
                }
            }
            setWorkFlowData(searchObj);
        }
        setFilterValue(filter)
    }

    useBeforeunload(() => "All Data will be lost and you will be redirected to login");


    return (
        <div>
            <Paper elevation={3} className={classes.mainBlock}>
                <Paper component="form" className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Workflows"
                        inputProps={{ 'aria-label': 'search Workflows' }}
                        onChange={(event) => searchValue(event)}
                        value={searchdataValue}
                    />
                </Paper>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="filter">Filter</InputLabel>
                    <Select
                        labelId="filter_label"
                        id="filter"
                        value={filterValue}
                        onChange={(event) => handleFilterChange(event)}
                        label="Filter"
                    >
                        <MenuItem value={"ALL"}>ALL</MenuItem>
                        <MenuItem value={"COMPLETED"}>COMPLETED</MenuItem>
                        <MenuItem value={"PENDING"}>PENDING</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained" color="primary"
                    startIcon={<AddIcon />}
                    className={`${classes.create}`}
                    onClick={(event) => createWorkflow(event)}
                >
                    Create Workflow
            </Button>
            </Paper>
            <div className={classes.container}>
                {Object.keys(WorkFlowData).length > 0 ? Object.keys(WorkFlowData).map((data, index) => {
                    return <WorkFowContainer data={WorkFlowData[data]} key={WorkFlowData[data].workFlowId}
                        indexValue={index} deleteData={(deleteId) => deleteData(deleteId)}
                        modifyStatus={(statusId, status) => modifyStatus(statusId, status)}
                        cardClick={(id, name) => cardClick(id, name)} />
                }) :
                    <Nomessages message="Create WorkFlow" />}
            </div>
        </div>
    );
}

export default WorkFlow