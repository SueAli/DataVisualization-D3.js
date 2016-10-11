
##Summary 

Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning of 
15 April 1912, after colliding with an iceberg during her maiden voyage from Southampton to New York City. More than 50% of passenger have been died. This visualization shows what sort of people were likely to survive? and how this varies with  different gender, age , and passenger class variables.

##Design 

The initial design followed "viewer-driven data narrative" structure, where user can explore the data by applying different filters (such as gender ) to change the char visualization.

### Working with data

No data cleansing techniques were applied to the attached Titanic dataset (given it is clean and ready to be used in visualization). Some data transformation were applied to some variables to deliver clear data visualization, such as:

- "Pclass" variable values converted to string values instead of integers: ["1","2","3"] --> ["1st Class", "2nd Class", "3rd Class"]
- "Survived" variable values mapped to more readable values: ["0", "1"] --> ["Died", "Survived"]

#### Visual Encoding of data

Bar chart was used for comparing and showing the demographics for survived passengers versues non-survived passengers.

<b>Chart visual encoding: </b>

- x position: passenger class & survivor status
- y position: the count of passengers
- color hue: died or survived passenger
- filters: user can change the chart data by changing gender values or ages values


##Feedback 

Note : Find initial_index.html which shows my initial data visualization design:

The following feedback has been collected from some of friends who reviewd my initial data visualization design: 

- Feedback#1 : by applying different filters, same colors might have different meanings with filters applied which is confusing for the reader. For example, "Female" gender was selected: "Died" would be colored in " light red" & "Survived" will be colored in "light blue". But in case of "All" was selected as gender filter, "Died" would be colored in"light blue" and "Survived" would be colored in "light red".

- Feedback#2 : x-axis passenger class values better to be ordered in a logical sequence to show the difference between them.

- Feedback#3 :legend should be added to the chart to make it cleare and to deleiver a complete message to the reader


All these feedback have been considered and fixed in my findal design

##Resources 

- dimple.chart: https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#x
- Examples dimple.js: http://dimplejs.org/examples_index.html