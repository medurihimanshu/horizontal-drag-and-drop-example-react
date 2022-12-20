import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {useEffect} from 'react';
import PopUp from "./PopUp";


function ScreeningApp() {
    // const listItems = [
    //   { id: "1", label: "Screening" },
    //   { id: "2", label: "Identity" },
    //   { id: "3", label: "Relationship" }
    //   // { id: "4", label: "Mike" },
    //   // { id: "5", label: "Dustin" },
    // ];
  
  
    
    
  
    
  
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
        item = screenRow1List.splice(source.index,1)[0];
        setScreenRow1List(screenRow1List);
      } else if (source.droppableId === 'row2') {
        item = screenRow2List.splice(source.index,1)[0];
        setRow2List(screenRow2List);
      } else if (source.droppableId === 'source') {
        item = screenSourceList.splice(source.index,1)[0];
        setSourceList(screenSourceList);
      }
  
  
      if (destination.droppableId === 'row1') {
        screenRow1List.splice(destination.index,0,item);
        setScreenRow1List(screenRow1List);
      } else if (destination.droppableId === 'row2') {
        screenRow2List.splice(destination.index,0,item);
        setRow2List(screenRow2List);
      } else if (destination.droppableId === 'source') {
        screenSourceList.splice(destination.index,0,item);
        setSourceList(screenSourceList);
      }
      console.log("Row1 - ", screenRow1List);
      console.log("Row2 - ", screenRow2List);
      console.log("Source - ", screenSourceList);
  
    }
  
    return (
  
      <div className="container">
        <div className="header"><center><h1>SCREENING  FLOW  CONFIGURATION</h1></center></div>
          <br/>
          <div className="card">
            
  
            <DragDropContext onDragEnd={onDragEnd} onDragOver={onDragOver}>
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
                            
                            <h3 className="label"><h3>{item.label}</h3></h3>
                            
                            
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className="maves-flow-container">
                <div className="basic-node">
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
                              <button>Configure</button>
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
                              <button>Configure</button>
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
                
                <div className="basic-node">
                  <center><h3>END</h3></center>
                </div>
              </div>
              
            </DragDropContext>
            
  
            
          
        
          </div>
          <button>CHECK</button>
  
          
      </div>
  
  
      
    );
  
  }
  
  export default ScreeningApp;