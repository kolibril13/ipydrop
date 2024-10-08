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
    files = traitlets.List(trait=traitlets.Unicode()).tag(sync=True)  # New traitlet for handling file names