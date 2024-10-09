# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "ipydrop==0.0.1",
#     "marimo",
#     "matplotlib==3.9.2",
#     "numpy==2.1.2",
# ]
# ///
import marimo

__generated_with = "0.9.4"
app = marimo.App(width="medium")


@app.cell
def __():
    import marimo as mo
    import numpy as np
    return mo, np


@app.cell
def __(mo):
    from ipydrop import Widget
    w = mo.ui.anywidget(Widget())
    w
    return Widget, w


@app.cell
def __(np, w):
    import matplotlib.pyplot as plt

    content = w.file_content

    xy_tuples = [(float(x), float(y)) for x, y in (line.split(',') for line in content.strip().split('\n')[1:]) if x and y]

    if not xy_tuples:
        # Use dummy data if xy_tuples is empty
        x = np.linspace(0, 10, 40)
        y = np.sin(x)

    else:
        x, y = zip(*xy_tuples)

    # Set the matplotlib style
    plt.style.use('_mpl-gallery')

    fig, ax = plt.subplots()
    ax.scatter(x, y, c="#ffa726")

    # Set figure size and axes properties
    fig.set_size_inches(3, 3)

    # Add grid and customize it
    ax.grid(True, which='both', linestyle='--', linewidth=0.5)
    ax.minorticks_on()  

    # Remove ticks
    ax.set_xticks([])
    ax.set_yticks([])

    # Optionally, set axis visibility
    ax.axis("on")

    # Change the color of the border (spines)
    for spine in ax.spines.values():
        spine.set_edgecolor("#ffa726")  # Set the color to #ffa726
        spine.set_linewidth(2) 

    plt.gca()
    return ax, content, fig, plt, spine, x, xy_tuples, y


@app.cell
def __(w):
    w.file_name , w.file_content
    return


if __name__ == "__main__":
    app.run()
