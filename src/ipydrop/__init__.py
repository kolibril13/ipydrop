import importlib.metadata
import pathlib

import anywidget
import traitlets

try:
    __version__ = importlib.metadata.version("ipydrop")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"


class Widget(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "widget.js"
    _css = pathlib.Path(__file__).parent / "static" / "widget.css"

    # Traitlets for the widget state
    value = traitlets.Int(0).tag(sync=True)
    
    # Updated traitlets for file handling
    file_name = traitlets.Unicode("").tag(sync=True)  # Traitlet for storing the name of the dropped file
    file_content = traitlets.Unicode("").tag(sync=True)  # Traitlet for storing the content of the dropped file (as a string)