// import React, { useState } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "react-beautiful-dnd";

// interface Item {
//   id: string;
//   content: string;
// }

// const initialLeftItems: Item[] = [
//   { id: "item-1", content: "Left Item 1" },
//   { id: "item-2", content: "Left Item 2" },
//   { id: "item-3", content: "Left Item 3" },
// ];

// const initialMiddleItems: Item[] = [
//   { id: "item-4", content: "Middle Item 1" },
//   { id: "item-5", content: "Middle Item 2" },
// ];

// const initialRightItems: Item[] = [
//   { id: "item-6", content: "Right Item 1" },
//   { id: "item-7", content: "Right Item 2" },
//   { id: "item-8", content: "Right Item 3" },
// ];

// const DraggableComponent: React.FC<{ item: Item; index: number }> = ({
//   item,
//   index,
// }) => (
//   <Draggable draggableId={item.id} index={index}>
//     {(provided, snapshot) => (
//       <div
//         ref={provided.innerRef}
//         {...provided.draggableProps}
//         {...provided.dragHandleProps}
//         style={{
//           userSelect: "none",
//           padding: 16,
//           margin: "0 0 8px 0",
//           backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
//           color: "white",
//           ...provided.draggableProps.style,
//         }}
//       >
//         {item.content}
//       </div>
//     )}
//   </Draggable>
// );

// const DroppableContainer: React.FC<{ items: Item[]; droppableId: string }> = ({
//   items,
//   droppableId,
// }) => (
//   <Droppable droppableId={droppableId}>
//     {(provided) => (
//       <div
//         {...provided.droppableProps}
//         ref={provided.innerRef}
//         style={{ padding: 16, minHeight: 100, backgroundColor: "#789ABC" }}
//       >
//         {items.map((item, index) => (
//           <DraggableComponent key={item.id} item={item} index={index} />
//         ))}
//         {provided.placeholder}
//       </div>
//     )}
//   </Droppable>
// );

// const MyDragDropComponent: React.FC = () => {
//   const [leftItems, setLeftItems] = useState<Item[]>(initialLeftItems);
//   const [middleItems, setMiddleItems] = useState<Item[]>(initialMiddleItems);
//   const [rightItems, setRightItems] = useState<Item[]>(initialRightItems);

//   const onDragEnd = (result: DropResult) => {
//     const { source, destination } = result;

//     if (!destination) return;

//     const getItemArray = (droppableId: string) => {
//       switch (droppableId) {
//         case "droppable-left":
//           return leftItems;
//         case "droppable-middle":
//           return middleItems;
//         case "droppable-right":
//           return rightItems;
//         default:
//           return [];
//       }
//     };

//     const getSetItemFunction = (droppableId: string) => {
//       switch (droppableId) {
//         case "droppable-left":
//           return setLeftItems;
//         case "droppable-middle":
//           return setMiddleItems;
//         case "droppable-right":
//           return setRightItems;
//         default:
//           return () => {};
//       }
//     };

//     const sourceItems = getItemArray(source.droppableId);
//     const destinationItems = getItemArray(destination.droppableId);

//     const [removed] = sourceItems.splice(source.index, 1);
//     destinationItems.splice(destination.index, 0, removed);

//     getSetItemFunction(source.droppableId)(sourceItems);
//     getSetItemFunction(destination.droppableId)(destinationItems);
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <DroppableContainer items={leftItems} droppableId="droppable-left" />
//         <DroppableContainer
//           items={middleItems}
//           droppableId="droppable-middle"
//         />
//         <DroppableContainer items={rightItems} droppableId="droppable-right" />
//       </div>
//     </DragDropContext>
//   );
// };

// export default MyDragDropComponent;
