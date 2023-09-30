# api.R

library(plumber)

# Create a Plumber API
pr <- plumb("R/api.R")


# Run the API
pr_run(pr, port = 8000)
