---
layout: page
title: Reproducible papers
description: making your work more useful for others (and the future you)
img: assets/img/9.jpg
importance: 1
category: work
---

Making your work reproducible has many benefits.
When others can easily reproduce your work, they're more likely to benefit from it and build on it.
More selfishly, returning to a project years later will be much easier if you have organized your work for reproducibility.

For me, the main challenges to achieving archival reproducibility are:

- Versioning and tagging
- Data/source organization
- Setup and supporting libraries, packages, etc.
- Clear sequential steps

Depending on the paper, this can be easier or harder.
However, the following steps provide a general formula for success.

#1. Create a GitHub repo
If this is truly a new endeavor, make a new repo.
If it's more of an extension, fork an existing repo or make a branch — this will allow you to reuse the previous work with a specific version (commit).

#1. Structure the repo
I suggest something like the structure shown below, noting the following:

- Data should (ideally) not be tracked in the git repo
- Any file paths in your source should be _relative_, not _absolute_ (i.e., should not include your username)

```
├── README.md                               # captures (1) project purpose (2) repo structure (3) getting started instructions
├── CITATION.cff                            # how to cite your work
├── pyproject.toml                          #
├── setup.py                                #
├── .gitignore                              # files/file types not to track in git (for everyone)
├── src
│   ├── __init__.py
│   └── repo_name.py                        # main Python package code
├── .github
│   ├── workflows
│       ├── make_papers.yml                 # (optional) build PDF paper(s) using GitHub actions
│       └── test_package.yml                # (optional) test your code
├── gfx                                     # graphics that will be included in the LaTex document
│   ├── repo_name_workflow_diagram.pdf      # diagram made with IPE
│   └── repo_name_exp_photo_sensors.jpg     # photograph
├── repo_name.ipynb                         # Python notebook (or script would be better) to generate figures for paper
├── repo_name.tex                           # latex document (all in one file)
├── repo_name.bib                           # your bibtex entries
├── asme_style_file.cls                     # latex style file
└── asme_style_file.bst                     # bibtex style file
```

#1. Set-up instructions

##1. Python
In the ideal scenario, you make everything clean enough that the setup instructions (provided in `README.md`) go something like:

```markdown
1. make a dedicated Python environment, e.g., `conda env create -n repo_name pip`
2. activate the environment: `conda activate repo_name`
3. clone the repository: `git clone git@github.com:org_name/repo_name.git`
4. install the package from the cloned repository: `pip install -e repo_name`
5. run the main Jupyter notebook: `jupyter nbconvert --to notebook --execute repo_name.ipynb`
```

##1. MATLAB
In MATLAB, it's harder to prescribe external dependencies:

```markdown
1. add source to the top of your MATLAB search path by running `repo_name_check_path.m`
2. check that you have the following toolboxes installed: ...
3. run `repo_name.m`
```

#1. Automation
A great way to ensure your project is truly reproducible (i.e., will run on another machine without some secret file you forgot) is to set up an automated build sequence.
You can do this with [GitHub Actions](https://github.com/features/actions) or other similar services.
You can find an example of this for the [wec_as_multiport project](https://github.com/sandialabs/wec_as_multiport) here: [python-app.yml](https://github.com/sandialabs/wec_as_multiport/blob/main/.github/workflows/python-app.yml).

#1. Testing
Testing your code is something most of us do without thinking of it to check our work.
We can take advantage of the testing tools used by software developers in our research projects to make sure we're not publishing mistakes.

- [pytest for Python projects](https://docs.pytest.org/en/stable/)
- MATLAB's unit-test framework

#1. Archiving
[Zenodo](https://zenodo.org) provides an excellent tool for archiving data and source code (direct integration with GitHub).
Providing a Zenodo DOI link in your paper to an archived release of your code and/or data is the gold standard.
Note also that Zenodo will use the `CITATION.cff` file in your GitHub repo to indicate how to cite your work.
If you prefer that the paper (not the code) be cited, you can make that clear in the `cff` file with the `preferred-citation` key.
