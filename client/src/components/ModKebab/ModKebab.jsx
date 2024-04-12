import React, {useEffect, useRef, useState} from "react";
import "./ModKebab.scss"
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { IoBanSharp } from "react-icons/io5";

const ModKebab = ({onDeletePost}) => {
    const [open, setOpen] = useState(false);
    const modKebabToggleRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modKebabToggleRef.current && !modKebabToggleRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleDropdownClick = (event) => {
        event.stopPropagation(); // prevents clicking the dropdown from closing the dropdown
    };

    const handleOptionClick = () => {
        setOpen(false); // Close the dropdown when a link is clicked
    };

    const handleDeleteClick = async () => {
        try {
            // Call the onDeletePost function passed from the parent component
            if (onDeletePost) {
                onDeletePost(); // Call the function to delete the post
            }
            setOpen(false); // Close the dropdown after deleting the post
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div className="mod-kebab-wrapper"  onClick={()=>setOpen(!open)} ref={modKebabToggleRef} >
            <IoEllipsisHorizontal />
            {open && (
                <div className="mod-kebab-options" onClick={handleDropdownClick}>
                    <div onClick={handleDeleteClick}>
                        <MdDeleteOutline /> <span>Delete Post</span>
                    </div>

                  {/*  <div onClick={handleOptionClick}>
                        <IoBanSharp /><span>Ban User</span>
                    </div>*/}
                </div>
            )}
        </div>
    )
}

export default ModKebab