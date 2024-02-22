import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

function RecruitmentCandidates() {
  const [columns, setColumns] = useState([
    {
      id: "column-1",
      candidates: [
        {
          id: 1,
          img: "/img/ellipse113.jpeg",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          
          id: 2,
          img: "/img/ellipse114.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          id: 3,
          img: "/img/ellipse115.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
      ],
    },
    {
      id: "column-2",
      candidates: [
        {
          id: 4,
          img: "/img/ellipse116.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          id: 5,
          img: "/img/ellipse117.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          id: 6,
          img: "/img/ellipse114.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
      ],
    },
    {
      id: "column-3",
      candidates: [
        {
          id: 7,
          img: "/img/ellipse114.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          id: 8,
          img: "/img/ellipse115.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          id: 9,
          img: "/img/ellipse116.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
      ],
    },
    {
      id: "column-4",
      candidates: [
        {
          id: 10,
          img: "/img/ellipse113.jpeg",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          id: 11,
          img: "/img/ellipse114.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          id: 12,
          img: "/img/ellipse115.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
      ],
    },
    {
      id: "column-5",
      candidates: [
        {
          id: 13,
          img: "/img/ellipse114.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          id: 14,
          img: "/img/ellipse115.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
        {
          id: 15,
          img: "/img/ellipse117.png",
          name: "Zaire Vaccaro",
          match: "Profile Match: 95%",
          date: "Applied date: Dec 17, 2023",
        },
      ],
    },
 
  ]);



  function onDragEnd(result: DropResult) {
    const { source, destination } = result;
  
    if (!destination) return; // Dropped outside the list
  
    const sourceColumn = columns.find(col => col.id === source.droppableId);
    const destColumn = columns.find(col => col.id === destination.droppableId);
  
    if (!sourceColumn || !destColumn) return; // Invalid source or destination column
  
    // If the candidate was moved within the same column
    if (source.droppableId === destination.droppableId) {
      const column = columns.find(col => col.id === source.droppableId);
      if (!column) return; // Invalid column
  
      const newCandidates = Array.from(column.candidates);
      const [movedCandidate] = newCandidates.splice(source.index, 1);
      newCandidates.splice(destination.index, 0, movedCandidate);
  
      setColumns(prevColumns => {
        const updatedColumns = prevColumns.map(col => {
          if (col.id === source.droppableId) {
            return { ...col, candidates: newCandidates };
          } else {
            return col;
          }
        });
        return updatedColumns;
      });
    } else {
      // Handle moving the candidate between different columns
      const sourceCandidates = Array.from(sourceColumn.candidates);
      const destCandidates = Array.from(destColumn.candidates);
      const [movedCandidate] = sourceCandidates.splice(source.index, 1);
      destCandidates.splice(destination.index, 0, movedCandidate);
  
      setColumns(prevColumns => {
        const updatedColumns = prevColumns.map(col => {
          if (col.id === source.droppableId) {
            return { ...col, candidates: sourceCandidates };
          } else if (col.id === destination.droppableId) {
            return { ...col, candidates: destCandidates };
          } else {
            return col;
          }
        });
        return updatedColumns;
      });
    }
  }
  

  return (
    <div className="w-full space-y-[10px]">
      <>
        <div className="  justify-between gap-[15px]  flex">
          <div className=" w-full p-2.5 bg-white rounded-lg border-t-2 border-[#7B61FF]  items-center justify-between flex">
            <div className=" text-black text-base font-medium font-inter leading-tight tracking-tight">
              Applied
            </div>
            <div className=" px-2 py-[4px] bg-[#F1F3F2] rounded-md  items-center  text-black text-base font-semibold font-inter leading-tight tracking-tight">
              5
            </div>
          </div>
          <div className=" w-full p-2.5 bg-white rounded-lg border-t-2 border-[#F5A722]  items-center justify-between flex">
            <div className=" text-black text-base font-medium font-inter leading-tight tracking-tight">
              Interviewing
            </div>
            <div className="  px-2 py-[4px] bg-[#F1F3F2] rounded-md  items-center  text-black text-base font-semibold font-inter leading-tight tracking-tight">
              2
            </div>
          </div>
          <div className=" w-full p-2.5 bg-white rounded-lg border-t-2 border-grass-100  items-center justify-between flex">
            <div className=" text-black text-base font-medium font-inter leading-tight tracking-tight">
              Offer
            </div>
            <div className="  px-2 py-[4px] bg-[#F1F3F2] rounded-md  items-center  text-black text-base font-semibold font-inter leading-tight tracking-tight">
              1
            </div>
          </div>
          <div className=" w-full p-2.5 bg-white rounded-lg border-t-2 border-[#34D399]  items-center justify-between flex">
            <div className=" text-black text-base font-medium font-inter leading-tight tracking-tight">
              Recruited
            </div>
            <div className="  px-2 py-[4px] bg-[#F1F3F2] rounded-md  items-center  text-black text-base font-semibold font-inter leading-tight tracking-tight">
              1
            </div>
          </div>
          <div className=" w-full p-2.5 bg-white rounded-lg border-t-2 border-red-400  items-center justify-between flex">
            <div className=" text-black text-base font-medium font-inter leading-tight tracking-tight">
              Reject
            </div>
            <div className="  px-2 py-[4px] bg-[#F1F3F2] rounded-md  items-center  text-black text-base font-semibold font-inter leading-tight tracking-tight">
              3
            </div>
          </div>
        </div>
      </>
      <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-5 gap-[16px]">
          {columns.map(column => (
            <Droppable key={column.id} droppableId={column.id} direction="vertical">
              {(provided) => (
                <div className="space-y-[10px]" {...provided.droppableProps} ref={provided.innerRef}>
                  {column.candidates.map((candidate, index) => (
                    <Draggable key={candidate.id} draggableId={String(candidate.id)} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <CandidateItem candidate={candidate} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

function CandidateItem({ candidate }: { candidate: { img: string; name: string; match: string; date: string } }) {
  const { img, name, match, date } = candidate;
  return (
    <div className="w-full px-2.5 py-[15px] bg-white rounded-lg border-t items-center gap-2.5 flex">
      <div className="flex-col justify-center gap-2 flex w-full">
        <div className="items-center gap-[15px] flex border-b pb-2 border-[#FBF2D0]">
          <Avatar variant="circular" alt={name} className="border-2 border-white hover:z-10 focus:z-10" src={img} />
          <div className="text-subheading text-base font-semibold font-inter leading-relaxed tracking-tight">
            {name}
          </div>
        </div>
        <div className="text-dim text-sm font-normal font-inter leading-snug tracking-tight">{match}</div>
        <div className="text-dim text-sm font-normal font-inter leading-snug tracking-tight">{date}</div>
      </div>
    </div>
  );
}

export default RecruitmentCandidates;
                                                                  