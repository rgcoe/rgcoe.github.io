---
layout: page
title: LaTeX best-practices
description: write and collaborate more cleanly
img: assets/img/latex_example.jpg
importance: 1
category: work
---

Since first learning to write papers with LaTeX in graduate school, I've refined my process considerably.
Here's a list of best-practices I've developed:

- Present a united value as, e.g., `1.2\,m$^2$`
  - Use the `\,` command for a small space between the value and the unit.
  - The unit is not italicized (outside the math environment — use superscripts carefully).
- Labeling and referencing
  - To refer to a figure, use `\figurename~\ref{fig:label_based_on_filename}`. This will display either "Fig. 1" or "Figure 1" depending on the document class and whether the reference begins a sentence.
  - To refer to a table, use `Table~\ref{tab:my_custom_label}`.
  - When assigning labels to figures, tables, equations, and sections, use something that explains the content, not the anticipated location in the text, as that may change (e.g., `\label{tab:geometric_parameters}`, not `\label{tab:table_1}`).
  - For figures, use the filename for the label (both are `power_time_history` in the example below)
  ```latex
  \begin{figure}[tb]
          \centering
          \includegraphics[width=1\columnwidth]{power_time_history.pdf}
          \caption{Time-history of generated power.}
          \label{fig:power_time_history}
  \end{figure}
  ```
- One sentence per line (this allows for better `git` tracking and [SyncTeX](https://github.com/jlaurens/synctex)); this means a paragraph will look like:

  ```latex
  This is my first sentence.
  This is my second sentence.
  Finally, a third sentence.

  This sentence begins a new paragraph.
  ...
  ```

- For display equations (those that appear on their own line), use commented lines (`%`) to maintain the current paragraph, if desired:

  ```latex
  ... we may therefore write
  %
  \begin{equation}
  x = a + b ,
  \end{equation}
  %
  where b is..
  ```

- When presenting multiple equations together, take advantage of the `subequations` environment to get distinct labels for each equation:

  ```latex
  \begin{subequations}
          \begin{align}
                e_1 &= \gamma_{t} e_2 \label{eq:transformer_eom_01} \\
                q_1 &= -\frac{1}{\gamma_t} q_2 \label{eq:transformer_eom_02}
          \end{align}
          \label{eq:transformer_eom}%
  \end{subequations}
  ```

- When producing distribution, consider some relatively simple steps to [make the resulting PDF accessible](https://en.wikipedia.org/wiki/PDF/UA). I found the following guides most helpful. I have not _yet_ been able to get this to work with the `listings` package (this is [a well-known problem](https://github.com/latex3/tagging-project/issues/70#issuecomment-2005126960)).
  - [The LaTeX project guide](https://latex3.github.io/tagging-project/documentation/usage-instructions)
  - [Overleaf guide](https://www.overleaf.com/learn/latex/An_introduction_to_tagged_PDF_files%3A_internals_and_the_challenges_of_accessibility)
