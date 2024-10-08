import "./widget.css";

function render({ model, el }) {
    // Create a div for the drag and drop area
    let dropArea = document.createElement("div");
    dropArea.classList.add("drop-area");
    dropArea.innerHTML = "Drag and drop files here or click to upload";
    
    // Style the drop area
    dropArea.style.border = "2px dashed #ccc";
    dropArea.style.padding = "20px";
    dropArea.style.textAlign = "center";
    dropArea.style.cursor = "pointer";
    
    // Handle drag over event to prevent default behavior
    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.style.borderColor = "#66afe9"; // Highlight the drop area
    });

    // Handle drag leave event to reset styles
    dropArea.addEventListener("dragleave", () => {
        dropArea.style.borderColor = "#ccc";
    });

    // Handle drop event
    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dropArea.style.borderColor = "#ccc";
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // Optional: Handle click event to trigger file input
    dropArea.addEventListener("click", () => {
        let fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.multiple = true;
        fileInput.style.display = "none";
        fileInput.addEventListener("change", () => {
            handleFiles(fileInput.files);
        });
        fileInput.click();
    });

    // Function to handle the dropped files
    function handleFiles(files) {
        for (let file of files) {
            console.log(`File dropped: ${file.name}`);
            // You can set the file information in the model if needed
            model.set("files", Array.from(files).map(f => f.name)); // Update the model with file names
            model.save_changes();
        }
        dropArea.innerHTML = `Dropped ${files.length} file(s)`;
    }

    // Add the drop area to the widget element
    el.classList.add("ipydrop");
    el.appendChild(dropArea);
}

export default { render };