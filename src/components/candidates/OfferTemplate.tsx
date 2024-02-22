import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { PrimaryButton } from "../elements/inputs/buttons";

function OfferTemplate() {
  const editorRef = useRef<any>(null); // Using 'any' type for flexibility

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="flex flex-col w-full rounded-md gap-4 mt-3">
      <div className="flex items-center justify-between w-full">
        <div className="text-subheading text-lg font-semibold font-inter leading-normal tracking-wide">
          Create Offer Template
        </div>
        <PrimaryButton label="Upload Template" className="!bg-[#738C79]" />
      </div>
      <div className="flex w-full justify-between gap-3">
        <div>
          <div className="mt-5 text-text text-base font-normal font-inter leading-normal tracking-tight">
            Template Name
          </div>
          <div className="mt-3 w-[400px] h-[42px] pl-[15px] pr-6 py-[9px] rounded-md border border-neutral-500 flex-col justify-center items-start gap-1.5 flex">
            <div className="items-center gap-[13px] flex">
              <div className="h-6 items-center flex">
                <input
                  className="textdim text-base font-inter leading-normal tracking-tight outline-none"
                  type="text"
                  placeholder="Enter template name"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 text-[#242424] text-sm font-medium font-inter leading-none tracking-wide">
            Inner Body
          </div>
          <div className="mt-3">
            <Editor
              apiKey="iwulttmakiodb9uly1lo30u8v7o9qblnn1zokpxrf43t3cj9"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 190,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }",
              }}
            />
          </div>

          <button onClick={log}>Log editor content</button>
        </div>
        <div className="mt-9">
          <div className="mt-5 w-[221px] h-[250px] rounded-lg border border-dim border-opacity-50 justify bg-center"></div>
        </div>
      </div>
    </div>
  );
}

export default OfferTemplate;
