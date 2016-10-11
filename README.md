
##Summary 

Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning of 15 April 1912, after colliding with an iceberg during her maiden voyage from Southampton to New York City. More than 50% of passenger have been died. 
The main objective for this project is making explanatory data visualization that shows the following findings about titanic passengers:

- 1st class passengers were more likely to survive, while third class passengers were more likely to die
- Women were more likely to survive than men

##Design 

The initial design followed "viewer-driven data narrative" structure, where I try to deliver my findings to the reader. The reader have the choice to view my findings about Titanic dataset in any order by applying different filters.

### Working with data

No data cleansing techniques were applied to the attached Titanic dataset (given it is clean and ready to be used in visualization). Some data transformation were applied to some variables to deliver clear data visualization, such as:

- "Pclass" variable values converted to string values instead of integers: ["1","2","3"] --> ["1st Class", "2nd Class", "3rd Class"]
- "Survived" variable values mapped to more readable values: ["0", "1"] --> ["Died", "Survived"]

#### Visual Encoding of data

To convey the reader with my findings, he should see a clear visualization that shows a comparison between passengers in different class. Bar char is the best to use to compare same meaures in different categories. So, I decided to use bar chart in my final design.

<b>Chart visual encoding: </b>

- x position: passenger class & survivor status
- y position: the count of passengers. Count was selected as our measure, because it refelects what we actually interested in our data. 
- color hue: died or survived passenger. Color hue is used in chart bars, because colors are the fastest to read & understood by readers.
- filters: user can change the chart data by changing gender values or ages values. Adding filters to my design, helps the user to view data changes and relate it to my findings


##Feedback 

Note: initial_index.html shows my initial data visualization design and index_1.html shows my second design. index.html is my final design.

The following feedback has been collected from some of friends who reviewed my initial and second data visualization designs: 

*initial_index.html:*

- Feedback#1 : by applying different filters, same colors might have different meanings with filters applied which is confusing for the reader. For example, "Female" gender was selected: "Died" would be colored in " light red" & "Survived" will be colored in "light blue". But in case of "All" was selected as gender filter, "Died" would be colored in "light blue" and "Survived" would be colored in "light red".

- Feedback#2: x-axis passenger class values better to be ordered in a logical sequence to show the difference between them.

- Feedback#3: legend should be added to the chart to make it clearer and to deliver a complete message to the reader

*index_1.html:*

- Feedback#4: use the same scaling for y-axis. Currently, it is somewhat difficult to compare, for example, survivorship of males vs females of 19 - 40 years old. The problem is caused by y-axis uses different scaling in each of these cases. By using the same scaling I'd only need to click and compare the heights of bars without having to decode them into populations by reading y-axis.


All these feedbacks have been considered and fixed in my final design

##Resources 

- dimple.chart: https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#x
- Examples dimple.js: http://dimplejs.org/examples_index.html
