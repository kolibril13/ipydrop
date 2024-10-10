# ipydrop

## Installation



## Development installation

Create a virtual environment and and install ipydrop in *editable* mode with the
optional development dependencies:

```sh
uv sync
```

You then need to install the JavaScript dependencies and run the development server.

```sh
npm install
npm run dev
```

Open `example.ipynb` in JupyterLab, VS Code, or your favorite editor
to start developing. Changes made in `js/` will be reflected
in the notebook.


## Run marimo example


`uvx marimo edit --sandbox example_ipydrop_csv.py` 


## Run notebook example

```sh
pip install ipydrop
jupyterlab
```