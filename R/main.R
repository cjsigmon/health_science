########################################
##      CDC23 Health Science Data     ##
##              - Main -              ##
########################################

## Set Up -----------------------------

# load packages/functions
library(plumber)
source("R/helper_functions.R")

# import data
diab.df <- import_data()


## Plumber -----------------------------

pr("R/plumber.R") %>%
  pr_run(port=8000)