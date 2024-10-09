import "./widget.css";

function render({ model, el }) {
    // Create a div for the drag and drop area
    let dropArea = document.createElement("div");
    dropArea.classList.add("drop-area");
    dropArea.innerHTML = "Drag and drop a file here or click to upload";

    // Handle drag over event to prevent default behavior
    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.classList.add("dragover"); // Add class to highlight the drop area
    });

    // Handle drag leave event to reset styles
    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("dragover");
    });

    // Handle drop event
    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dropArea.classList.remove("dragover");
        const files = e.dataTransfer.files;
        if (files.length > 1) {
            alert("Please drop only one file.");
        } else {
            handleFile(files[0]); // Only handle the first file
        }
    });

    // Optional: Handle click event to trigger file input
    dropArea.addEventListener("click", () => {
        let fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.style.display = "none"; // Hide the file input element
        fileInput.addEventListener("change", () => {
            if (fileInput.files.length > 1) {
                alert("Please select only one file.");
            } else {
                handleFile(fileInput.files[0]);
            }
        });
        fileInput.click();
    });

    // Function to handle the dropped or selected file
    function handleFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            console.log(`File dropped: ${file.name}`);
            
            // Update the model with file name and content
            model.set("file_name", file.name); // Set the file name
            model.set("file_content", content); // Set the file content as a string
            model.save_changes();
            
            dropArea.innerHTML = `Dropped file: ${file.name}`;
        };
        reader.readAsText(file); // Read the file content as a text string
    }

    // Add the drop area to the widget element
    el.classList.add("ipydrop");
    el.appendChild(dropArea);
}

export default { render };