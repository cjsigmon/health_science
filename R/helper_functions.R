########################################
##      CDC23 Health Science Data     ##
##        - Helper Functions -        ##
########################################

# function for importing data.set
import_data <- function() {
  data <- read.csv("data/diabdata.csv")
  data[data == "?"] <- NA
  return(data)
}
