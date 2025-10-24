---
layout: page
title: LaTeX best-practices
description: write and collaborate more cleanly
img: assets/img/latex_example.jpg
importance: 1
category: work
---

Since first learning to write papers using LaTeX in graduate school, I've refined my process quite a bit.
Here's a list of "best-practices" I've come up with:

- Present a united value as, e.g., `$[1,2]$\,m$^2$`
  - Use the `\,` command for small space between the value and unit
  - The unit is not italicized (outside math environment -- use superscripts carefully)
- Labels and referencing
  - To refer to a figure, use `\figurename~\ref{fig:label_based_on_filename}`, this will display either "Fig. 1" or "Figure 1" depending on the particular document class and whether this reference begins a sentence.
  - To refer to a table, use `Table~\ref{tab:my_custom_label}`
  - When assigning labels to figures, tables, equations, and sections, use something that explains the content, not the anticipated location in the text, as this may change (`\label{tab:geometric_parameters}`, not `\label{tab:table_1}`).
  - For figures, use the filename for the label (both are `power_time_history` below)
  ```latex
  \begin{figure}[tb]
          \centering
          \includegraphics[width=1\columnwidth]{power_time_history.pdf}
          \caption{Time-history of generated power.}
          \label{fig:power_time_history}
  \end{figure}
  ```
- One sentence per line (allows for better `git` tracking and [SyncTex](https://github.com/jlaurens/synctex)); this means a paragraph will look like

  ```latex
  This is my first sentence.
  This is my second sentence.
  Finally, a third sentence.

  This sentence begins a new paragraph.
  ...
  ```

- For display equations (those that appear on their own line), use commented lines (`%`) to maintain the current paragraph if desired
  ```latex
  ... we may therefore write
  %
  \begin{equation}
  x = a + b ,
  \end{equation}
  %
  where b is..
  ```
