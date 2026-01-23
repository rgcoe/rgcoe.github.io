---
layout: page
title: macOS set-up
description: Setting up a mac for scientific computing
img: assets/img/12.jpg
importance: 2
category: work
exclude: true
---

For me, macOS offers an expensive, but more user friendly alternative to Linux.
However, if you're like me, it can be rather easy to turn your machine into a mess (see this very poignant [XKCD cartoon](https://xkcd.com/1987/)).
Based on trial-and-error and reading what others have done, here's what I've come up:

# xcode

While I don't use xcode directly, it provides a [host of utilities](https://developer.apple.com/documentation/xcode/command-line-tools) that are useful.

# Homebrew

Their tag-line says it all: "The Missing Package Manager for macOS (or Linux)."
See install instructions at [https://brew.sh](https://brew.sh).
Here's a list of the key Formulas and Casks I've installed:

- [MacTeX](https://www.tug.org/mactex/): Allows you to compile LaTeX documents
- [Skim](https://skim-app.sourceforge.io): PDF viewer that works well with Sublime Text's LaTeXTools package. Don't forget to enable syncing for Sublime Text in the Settings.
- [BibDesk](https://bibdesk.sourceforge.io): Excellent tool for BibTex files
- [Ipe](https://ipe.otfried.org): Excellent drawing tool for making diagrams, especially when you want to inlcude LaTeX symbols/equations. To get Ipe to compile LaTeX on the most recent versions of macOS (not sure when this issue started...), I have needed to create an `~/.ipe/ipe.config` file with explicitly showing the path for (e.g., `IPELATEXPATH=/Library/TeX/texbin`). For reference, see
  - <https://github.com/otfried/ipe/issues/526>
  - <https://otfried.github.io/ipe/80_advanced.html#ipe-conf>
- [Gimp](https://www.gimp.org): Photoshop alternative
- [Inkscape](https://inkscape.org): Illustrator alternative
- [Ghostscript](https://ghostscript.com): Command line PDF manipulation
- [Imagemagick](https://imagemagick.org): Command line image manipulation
- [FFMPEG](https://www.ffmpeg.org): Command line video manipulation
- [htop](https://htop.dev): Command line tool to view system performance
- [dos2unix](https://waterlan.home.xs4all.nl/dos2unix.html) - convert line endings
- [pwgen](https://sourceforge.net/projects/pwgen/): Create secure passwords
- [VLC](https://www.videolan.org/vlc/): Most univeral video viewer that I'm aware of
- [Panoply](https://www.giss.nasa.gov/tools/panoply/): netCDF viewer
- [open-mpi](https://www.open-mpi.org): Message passing library for numerical tools
- [pandoc](https://pandoc.org): Universal document converter

# Sublime Text

I use [Sublime Text](https://www.sublimetext.com) for simple text file editing and also for writing papers with LaTeX.
Make sure you set up the [command line interface](https://www.sublimetext.com/docs/command_line.html) so that you can open files in Sublime Text from the terminal. [Package Control](https://packagecontrol.io) allows you to install handy add-ons to Sublime Text; I use:

- [LaTeXTools](https://sublimetext.github.io/LaTeXTools/): Note that you'll want to update LaTeXTools settings to launch Skim automatically (`"viewer": "skim",`).
- [Rainbow CSV](https://github.com/mechatroner/sublime_rainbow_csv)

# Sublime Merge

I'm capable of using git from the command line, but for more complex operations a GUI is very handy.
While VS Code has very good built-in capabilities and extensions, I stll like [Sublime Merge](https://www.sublimemerge.com) for certain things.

# Python

TODO

# VS Code

TODO

# MATLAB

TODO

# Shell scripts

I have a coupe of custom bash scripts that I mostly keep track of in my [GitHub gists](https://gist.github.com/rgcoe).

# ZSHRC

Here's my `~/.zshrc` file:

```zsh
# -------------------------------------------------------------------------------
# Path
export PATH="$PATH:/Users/ryancoe/bin"


# -------------------------------------------------------------------------------
# Aliases
alias ls='ls -lh --color=auto'

# -------------------------------------------------------------------------------
# History and autocompletion
autoload -U compinit
compinit

HISTFILE=~/.histfile
HISTSIZE=100000
SAVEHIST=100000
setopt HIST_EXPIRE_DUPS_FIRST
setopt SHARE_HISTORY

autoload -U up-line-or-beginning-search
autoload -U down-line-or-beginning-search

zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search

bindkey '\e[A' history-search-backward
bindkey '\e[B' history-search-forward

# -------------------------------------------------------------------------------
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/ryancoe/miniforge3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/ryancoe/miniforge3/etc/profile.d/conda.sh" ]; then
        . "/Users/ryancoe/miniforge3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/ryancoe/miniforge3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


# >>> mamba initialize >>>
# !! Contents within this block are managed by 'mamba shell init' !!
export MAMBA_EXE='/Users/ryancoe/miniforge3/bin/mamba';
export MAMBA_ROOT_PREFIX='/Users/ryancoe/miniforge3';
__mamba_setup="$("$MAMBA_EXE" shell hook --shell zsh --root-prefix "$MAMBA_ROOT_PREFIX" 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__mamba_setup"
else
    alias mamba="$MAMBA_EXE"  # Fallback on help from mamba activate
fi
unset __mamba_setup
# <<< mamba initialize <<<
```
