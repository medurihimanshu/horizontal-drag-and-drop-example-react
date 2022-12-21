import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {useEffect} from 'react';
import Popup from "./PopUp";
import Xarrow from "react-xarrows";	
import ScreeningPage from "./ScreeningPage"
import axios from 'axios';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
 
const baseURL = "http://127.0.0.1:8000/execute";
const dummyBaseURL = "https://webhook.site/cce4d976-a772-436d-9e1a-0e70f22d786f";

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

function App() {
  // const listItems = [
  //   { id: "1", label: "Screening" },
  //   { id: "2", label: "Identity" },
  //   { id: "3", label: "Relationship" }
  //   // { id: "4", label: "Mike" },
  //   // { id: "5", label: "Dustin" },
  // ];

  useEffect(() => {
    async function fetchData() {
      console.log('start');

      await sleep(1);

      console.log('end');
    }
    fetchData();
  });

  // CONSTATNS FOR MAIN PAGE
  const original = [
    { id: "1", label: "Screening", metadata:[] },
    { id: "2", label: "Identity", metadata:[] },
    { id: "3", label: "Relationship", metadata:[] }
  ];
  const row1 = [];
  const row2 = [];
  const row3 = [];
  
  const [sourceList, setSourceList] = useState(original);
  const [row1List, setRow1List] = useState(row1);
  const [row2List, setRow2List] = useState(row2);
  const [row3List, setRow3List] = useState(row3);
  // const [screeningPopUpState, setScreeningPopUpState] = useState(false);
  // const [identityPopUpState, setIdentityPopUpState] = useState(false);
  // const [relationshipPopUpState, setRelationshipPopUpState] = useState(false);

  // CONSTATNS FOR SCREENING PAGE
  const screening = [
    { id: "1", label: "PEP"},
    { id: "2", label: "DPL" }
  ];
  const screenrow1 = [];
  const screenrow2 = [];
  const [screenSourceList, setscreenSourceList] = useState(screening);
  const [screenRow1List, setScreenRow1List] = useState(screenrow1);
  const [screenRow2List, setscreenRow2List] = useState(screenrow2);

  const screenMatrix = [
    screenRow1List,
    screenRow2List
  ]

  // CONSTATNS FOR SCREENING PAGE
  const relationship = [
    { id: "1", label: "LOA"},
    { id: "2", label: "Statute" },
    { id: "3", label: "BAV" },
  ];
  const relationshiprow1 = [];
  const relationshiprow2 = [];
  const relationshiprow3 = [];

  const [relationshipSourceList, setRelationshipSourceList] = useState(relationship);
  const [relationshipRow1List, setRelationshipRow1List] = useState(relationshiprow1);
  const [relationshipRow2List, setRelationshipRow2List] = useState(relationshiprow2);
  const [relationshipRow3List, setRelationshipRow3List] = useState(relationshiprow3);

  const relationshipMatrix = [
    relationshipRow1List,
    relationshipRow2List,
    relationshipRow3List
  ]

  // CONSTATNS FOR IDENTITY PAGE
  const identity = [
    { id: "1", label: "TIV"},
    { id: "2", label: "IDV" },
    { id: "3", label: "BIV" }

  ];
  const identityrow1 = [];
  const identityrow2 = [];
  const identityrow3 = [];
  const [identitySourceList, setIdentitySourceList] = useState(identity);
  const [identityRow1List, setIdentityRow1List] = useState(identityrow1);
  const [identityRow2List, setIdentityRow2List] = useState(identityrow2);
  const [identityRow3List, setIdentityRow3List] = useState(identityrow3);

  const identityMatrix = [
    identityRow1List,
    identityRow2List,
    identityRow3List
  ]
  


  // const togglePop = (identifier) => {
  //   if (identifier == "Screening") setScreeningPopUpState(({ screeningPopUpState }) => ({ screeningPopUpState: !screeningPopUpState }));
  //   else if (identifier == "Identity") setIdentityPopUpState(!identityPopUpState);
  //   else if (identifier == "Relationship") setRelationshipPopUpState(!relationshipPopUpState);
  // console.log(screeningPopUpState);
  //   // console.log(identityPopUpState);
  // };

  const [isScreeningOpen, setIsScreeningOpen] = useState(false);
 
  const screeningTogglePop = () => {
    setIsScreeningOpen(({ isScreeningOpen }) => ({ isScreeningOpen: !isScreeningOpen }));
    console.log(isScreeningOpen);
    // console.log(screeningData);
  }



    

  const onDragOver = (ev) => {
    ev.preventDefault();
  }

  const onDragEnd = (event) => {
    const { destination, source } = event;
    console.log(event);
    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let item = null;
    if (source.droppableId === 'row1') {
      item = row1List.splice(source.index,1)[0];
      setRow1List(row1List);
    } else if (source.droppableId === 'row2') {
      item = row2List.splice(source.index,1)[0];
      setRow2List(row2List);
    } else if (source.droppableId === 'row3') {
      item = row3List.splice(source.index,1)[0];
      setRow3List(row3List);
    } else if (source.droppableId === 'source') {
      item = sourceList.splice(source.index,1)[0];
      setSourceList(sourceList);
    }


    if (destination.droppableId === 'row1') {
      row1List.splice(destination.index,0,item);
      setRow1List(row1List);
    } else if (destination.droppableId === 'row2') {
      row2List.splice(destination.index,0,item);
      setRow2List(row2List);
    } 
    if (destination.droppableId === 'row3') {
      row3List.splice(destination.index,0,item);
      setRow3List(row3List);
    } 
    if (destination.droppableId === 'source') {
      sourceList.splice(destination.index,0,item);
      setSourceList(sourceList);
    }
    console.log("Row1 - ", row1List);
    console.log("Row2 - ", row2List);
    console.log("Row3 - ", row3List);
    console.log("Source - ", sourceList);

  }

  const onDragEndScreening = (event) => {
    const { destination, source } = event;
    console.log(event);
    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let item = null;
    if (source.droppableId === 'row1') {
      item = screenRow1List.splice(source.index,1)[0];
      setScreenRow1List(screenRow1List);
    } else if (source.droppableId === 'row2') {
      item = screenRow2List.splice(source.index,1)[0];
      setscreenRow2List(screenRow2List);
    } else if (source.droppableId === 'source') {
      item = screenSourceList.splice(source.index,1)[0];
      setscreenSourceList(screenSourceList);
    }


    if (destination.droppableId === 'row1') {
      screenRow1List.splice(destination.index,0,item);
      setScreenRow1List(screenRow1List);
    } else if (destination.droppableId === 'row2') {
      screenRow2List.splice(destination.index,0,item);
      setscreenRow2List(screenRow2List);
    } else if (destination.droppableId === 'source') {
      screenSourceList.splice(destination.index,0,item);
      setscreenSourceList(screenSourceList);
    }
    console.log("Row1 - ", screenRow1List);
    console.log("Row2 - ", screenRow2List);
    console.log("Source - ", screenSourceList);

  }

  const onDragEndIdentity = (event) => {
    const { destination, source } = event;
    console.log(event);
    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let item = null;
    if (source.droppableId === 'row1') {
      item = identityRow1List.splice(source.index,1)[0];
      setIdentityRow1List(identityRow1List);
    } else if (source.droppableId === 'row2') {
      item = identityRow2List.splice(source.index,1)[0];
      setIdentityRow2List(identityRow2List);
    } else if (source.droppableId === 'row3') {
      item = identityRow3List.splice(source.index,1)[0];
      setIdentityRow3List(identityRow3List);
    }else if (source.droppableId === 'source') {
      item = identitySourceList.splice(source.index,1)[0];
      setIdentitySourceList(identitySourceList);
    }


    if (destination.droppableId === 'row1') {
      identityRow1List.splice(destination.index,0,item);
      setIdentityRow1List(identityRow1List);
    } else if (destination.droppableId === 'row2') {
      identityRow2List.splice(destination.index,0,item);
      setIdentityRow2List(identityRow2List);
    } else if (destination.droppableId === 'row3') {
      identityRow3List.splice(destination.index,0,item);
      setIdentityRow3List(identityRow3List);
    }else if (destination.droppableId === 'source') {
      identitySourceList.splice(destination.index,0,item);
      setIdentitySourceList(identitySourceList);
    }
    console.log("Row1 - ", identityRow1List);
    console.log("Row2 - ", identityRow2List);
    console.log("Row2 - ", identityRow3List);
    console.log("Source - ", identitySourceList);

  }

  const onDragEndRelationship = (event) => {
    const { destination, source } = event;
    console.log(event);
    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let item = null;
    if (source.droppableId === 'row1') {
      item = relationshipRow1List.splice(source.index,1)[0];
      setRelationshipRow1List(relationshipRow1List);
    } else if (source.droppableId === 'row2') {
      item = relationshipRow2List.splice(source.index,1)[0];
      setRelationshipRow2List(relationshipRow2List);
    } else if (source.droppableId === 'row3') {
      item = relationshipRow3List.splice(source.index,1)[0];
      setRelationshipRow3List(relationshipRow3List);
    } else if (source.droppableId === 'source') {
      item = relationshipSourceList.splice(source.index,1)[0];
      setRelationshipSourceList(relationshipSourceList);
    }


    if (destination.droppableId === 'row1') {
      relationshipRow1List.splice(destination.index,0,item);
      setRelationshipRow1List(relationshipRow1List);
    } else if (destination.droppableId === 'row2') {
      relationshipRow2List.splice(destination.index,0,item);
      setRelationshipRow2List(relationshipRow2List);
    } 
    if (destination.droppableId === 'row3') {
      relationshipRow3List.splice(destination.index,0,item);
      setRelationshipRow3List(relationshipRow3List);
    } 
    if (destination.droppableId === 'source') {
      relationshipSourceList.splice(destination.index,0,item);
      setRelationshipSourceList(relationshipSourceList);
    }
    console.log("Relationship Row1 - ", relationshipRow1List);
    console.log("Relationship Row2 - ", relationshipRow2List);
    console.log("Relationship Row3 - ", relationshipRow3List);
    console.log("Relationship Source - ", relationshipSourceList);

  }

  const executeFlow = (event, result) => {
    axios
      .post(dummyBaseURL, JSON.stringify(result))
      .then((response) => {
        // If response.data success
        //setMessage("Executed Mataveri Flow Successfully!");
        // If response.data fail
        //setMessage("Mataveri Flow Execution Failure!");
      });
      setIdentityRow1List([]);
      setIdentityRow2List([]);
      setIdentityRow3List([]);
      setIdentitySourceList(identity);

      setRelationshipRow1List([]);
      setRelationshipRow2List([]);
      setRelationshipRow3List([]);
      setRelationshipSourceList(relationship);

      setScreenRow1List([]);
      setscreenRow2List([]);
      setscreenSourceList(screening);

      setRow1List([]);
      setRow2List([]);
      setRow3List([]);
      setSourceList(original);
      alert('Execution Submitted Successfully!');
  }

  original[0].metadata = screenMatrix;
  original[1].metadata = identityMatrix;
  original[2].metadata = relationshipMatrix;
  
  const result = [
    row1List,
    row2List,
    row3List
  ]

  return (

    <div className="container">
      <div id="top" className="header"><center><h1>MATAVERI  FLOW  CONFIGURATION</h1></center></div>
        <br/>
        <div className="card">
          

          <DragDropContext onDragEnd={onDragEnd} onDragOver={onDragOver}>
            <div className="maves-flow-container" id="box1">	
              <div className="basic-node">	
                <center><h3>ESTABLISHMENTS</h3></center>	
              </div>
              <Droppable droppableId="source" direction="vertical">
                {/* <div className="basic-node">
                  <center><b>END</b></center>
                </div> */}
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container-origin"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {sourceList.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                        // ondrop={onDropOrigin}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            
                            <div className="label"><h3>{item.label}</h3></div>
                            
                            
                            {/* <button onClick={screeningTogglePop}>Configure</button> */}
                            {/* { (screeningPopUpState && item.label == "Screening") ? <ScreeningPage 
                            toggle={togglePop} list={sourceList} setList={setSourceList}  /> : null}  */}
                            <input
                              type="button"
                              value="Configure"
                              onClick={() => window.location.replace(`/#${item.id}`)}
                            />
                            {(isScreeningOpen && (item.label === "Screening")) ? <Popup
                              content={<>
                                <b>Design your Popup</b>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <button>Test button</button>
                              </>}
                              handleClose={screeningTogglePop} /> : null}
                            
                            
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="maves-flow-container" id="box2">
              <div className="basic-node" id = "box-start">
                <center><h3>START</h3></center>
              </div>
              <br/>
              <br/>
              <br/>
              <Droppable droppableId="row1" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "box-dest1"
                  >
                    {row1List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                            <button onClick={() => window.location.replace(`/#${item.id}`)}>Configure</button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>  
              <br/>    
              <Droppable droppableId="row2" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "box-dest2"
                  >
                    {row2List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                            <button onClick={() => window.location.replace(`/#${item.id}`)}>Configure</button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>
              <br/>
              <Droppable droppableId="row3" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "box-dest3"
                  >
                    {row3List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                            <button onClick={() => window.location.replace(`/#${item.id}`)}>Configure</button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>
              <br/>
              <div className="basic-node" id = "box-end">
                <center><h3>END</h3></center>
              </div>
            </div>
            <Xarrow	
                start="box1" //can be react ref	
                end="box2" //or an id	
            />	
            <Xarrow	
                start="box-start" //can be react ref	
                end="box-dest1" //or an id	
            />	
            <Xarrow	
                start="box-dest1" //can be react ref	
                end="box-dest2" //or an id	
            />	
            <Xarrow	
                start="box-dest2" //can be react ref	
                end="box-dest3" //or an id	
            />	
            <Xarrow	
                start="box-dest3" //can be react ref	
                end="box-end" //or an id	
            />
            
          </DragDropContext>
          

          
        
      
        </div>
        <br/>
        <Button variant="contained" onClick={event => executeFlow(event, result)}>EXECUTE FLOW</Button>

        <br/>
        <br/>
        <br/>
        <br/>   
        <br/>
        <br/>
        <br/>
        <br/> 

        <div id="1" className="header"><center><h1>SCREENING  FLOW  CONFIGURATION</h1></center></div>
        <br/>
        <div className="card">
          <DragDropContext onDragEnd={onDragEndScreening} onDragOver={onDragOver}>
            <div className="maves-flow-container" id="screenbox1">	
              <div className="basic-node">	
                <center><h3>SCREENING CLAIMS</h3></center>	
              </div>
              <Droppable droppableId="source" direction="vertical">
                {/* <div className="basic-node">
                  <center><b>END</b></center>
                </div> */}
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container-origin"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {screenSourceList.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                        // ondrop={onDropOrigin}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            
                            <div className="label"><h3>{item.label}</h3></div>
                   
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="maves-flow-container" id="screenbox2">
              <div className="basic-node" id = "screenbox-start">
                <center><h3>START</h3></center>
              </div>
              <br/>
              <br/>
              <br/>
              <Droppable droppableId="row1" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "screenbox-dest1"
                  >
                    {screenRow1List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>  
              <br/>    
              <Droppable droppableId="row2" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "screenbox-dest2"
                  >
                    {screenRow2List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              
              
              <br/>
              <br/>
              <br/>
              <div className="basic-node" id = "screenbox-end">
                <center><h3>END</h3></center>
              </div>
            </div>
            <Xarrow	
                start="screenbox1" //can be react ref	
                end="screenbox2" //or an id	
            />	
            <Xarrow	
                start="screenbox-start" //can be react ref	
                end="screenbox-dest1" //or an id	
            />	
            <Xarrow	
                start="screenbox-dest1" //can be react ref	
                end="screenbox-dest2" //or an id	
            />	
            
            <Xarrow	
                start="screenbox-dest2" //can be react ref	
                end="screenbox-end" //or an id	
            />
            
          </DragDropContext>
          

          
        
      
        </div>

        <br/>
        <Button variant="contained" onClick={() => window.location.replace("/#top")}>GO TO TOP</Button>
         
        <br/>
        <br/>
        <br/>
        <br/> 
        <br/>
        <br/>
        <br/>
        <br/> 
        <br/>
        <br/>
        <br/>
        <br/> 
      
        <div id="2" className="header"><center><h1>IDENTITY  FLOW  CONFIGURATION</h1></center></div>
        <br/>
        <div className="card">
          <DragDropContext onDragEnd={onDragEndIdentity} onDragOver={onDragOver}>
            <div className="maves-flow-container" id="identiybox1">	
              <div className="basic-node">	
                <center><h3>IDENTITY CLAIMS</h3></center>	
              </div>
              <Droppable droppableId="source" direction="vertical">
                {/* <div className="basic-node">
                  <center><b>END</b></center>
                </div> */}
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container-origin"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {identitySourceList.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                        // ondrop={onDropOrigin}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            
                            <div className="label"><h3>{item.label}</h3></div>
                           
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="maves-flow-container" id="identiybox2">
              <div className="basic-node" id = "identiybox-start">
                <center><h3>START</h3></center>
              </div>
              <br/>
              <br/>
              <br/>
              <Droppable droppableId="row1" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "identiybox-dest1"
                  >
                    {identityRow1List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>  
              <br/>    
              <Droppable droppableId="row2" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "identiybox-dest2"
                  >
                    {identityRow2List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>
              <br/>
              <Droppable droppableId="row3" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "identiybox-dest3"
                  >
                    {identityRow3List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>
              <br/>
              <div className="basic-node" id = "identiybox-end">
                <center><h3>END</h3></center>
              </div>
            </div>
            <Xarrow	
                start="identiybox1" //can be react ref	
                end="identiybox2" //or an id	
            />	
            <Xarrow	
                start="identiybox-start" //can be react ref	
                end="identiybox-dest1" //or an id	
            />	
            <Xarrow	
                start="identiybox-dest1" //can be react ref	
                end="identiybox-dest2" //or an id	
            />	
            <Xarrow	
                start="identiybox-dest2" //can be react ref	
                end="identiybox-dest3" //or an id	
            />	
            <Xarrow	
                start="identiybox-dest3" //can be react ref	
                end="identiybox-end" //or an id	
            />
            
          </DragDropContext>
          

          
        
      
        </div>
        <Button variant="contained" onClick={() => window.location.replace("/#top")}>GO TO TOP</Button>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        


        <div id="3" className="header"><center><h1>RELATIONSHIP  FLOW  CONFIGURATION</h1></center></div>
        <br/>
        <div className="card">
          <DragDropContext onDragEnd={onDragEndRelationship} onDragOver={onDragOver}>
            <div className="maves-flow-container" id="relationshipbox1">	
              <div className="basic-node">	
                <center><h3>RELATIONSHIP CLAIMS</h3></center>	
              </div>
              <Droppable droppableId="source" direction="vertical">
                {/* <div className="basic-node">
                  <center><b>END</b></center>
                </div> */}
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container-origin"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {relationshipSourceList.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                        // ondrop={onDropOrigin}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            
                            <div className="label"><h3>{item.label}</h3></div>
                           
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="maves-flow-container" id="relationshipbox2">
              <div className="basic-node" id = "relationshipbox-start">
                <center><h3>START</h3></center>
              </div>
              <br/>
              <br/>
              <br/>
              <Droppable droppableId="row1" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "relationshipbox-dest1"
                  >
                    {relationshipRow1List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>  
              <br/>    
              <Droppable droppableId="row2" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "relationshipbox-dest2"
                  >
                    {relationshipRow2List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>
              <br/>
              <Droppable droppableId="row3" direction="horizontal" >
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id = "relationshipbox-dest3"
                  >
                    {relationshipRow3List.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className="material-symbols-outlined">
                              drag_indicator
                            </span>
                            <div className="char-avatar">
                              {item.label.charAt(0)}
                            </div>
                            <h3 className="label"><h3>{item.label}</h3></h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <br/>
              <br/>
              <br/>
              <div className="basic-node" id = "relationshipbox-end">
                <center><h3>END</h3></center>
              </div>
            </div>
            <Xarrow	
                start="relationshipbox1" //can be react ref	
                end="relationshipbox2" //or an id	
            />	
            <Xarrow	
                start="relationshipbox-start" //can be react ref	
                end="relationshipbox-dest1" //or an id	
            />	
            <Xarrow	
                start="relationshipbox-dest1" //can be react ref	
                end="relationshipbox-dest2" //or an id	
            />	
            <Xarrow	
                start="relationshipbox-dest2" //can be react ref	
                end="relationshipbox-dest3" //or an id	
            />	
            <Xarrow	
                start="relationshipbox-dest3" //can be react ref	
                end="relationshipbox-end" //or an id	
            />
            
          </DragDropContext>
        </div>
            
        <Button variant="contained" onClick={() => window.location.replace("/#top")}>GO TO TOP</Button>


        
    </div>

    


    
  );


  
}

export default App;