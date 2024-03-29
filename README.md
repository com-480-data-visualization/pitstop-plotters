# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Colin Pelletier | 336438 |
| Yahya Hadi | 302907 |
| Xavier Ogay | 301681 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.

### Dataset

> Find a dataset (or multiple) that you will explore. Assess the quality of the data it contains and how much preprocessing / data-cleaning it will require before tackling visualization. We recommend using a standard dataset as this course is not about scraping nor data processing.
>
We would like to create interactive visualizations from the [Formula 1 World Championship (1950-2023)](https://www.kaggle.com/datasets/rohanrao/formula-1-world-championship-1950-2020) dataset from Kaggle. This dataset contains data from the Formula 1 World Championship from the 1950 season to the last completed season in 2023.
It has a high usability score of **10** on Kaggle and is the most complete dataset we've found on the topic. It contains a lot of interesting information stored in different tables about:
- Tracks 
- Drivers 
- Constructors 
- Championship standings
- Race results 
- Qualifying results 
- Lap times 
- Pit stops

All tables contain primary keys and foreign keys, which allows us to get the necessary information by only doing merges between the tables (easily done with the Pandas Python library).

Additionally, this dataset has been studied by many people who have published their Jupyter notebooks on Kaggle. Most of those notebooks focus on preprocessing and simple non-interactive visualizations. Using them will allow us to spend less time on pre-processing and data cleaning and focus our work on visualizations. Here's an example of a very complete notebook that we have already successfully run locally: [Jupyter notebook example](https://www.kaggle.com/code/akhilreddy9554/formula-1-a-visual-explorative-analysis).

Our preprocessing tasks will mostly consist of merging tables to extract some missing statistics.
Also some work is required to deal with the ``“\N”`` values which correspond to races not finished. Eg: in the races.position column.


### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

Formula 1 is an extremely interesting sport that has seen a increase in interest in recent years due to its excellent social media management and the Netflix series [Formula 1: Drive to Survive](https://en.wikipedia.org/wiki/Formula_1:_Drive_to_Survive). This allowed new fans to catch up on the past few seasons without delving too deep into the subject. However, it might become difficult to get information and statistics about Formula 1 in an interactive and entertaining way when trying to strengthen one’s knowledge.

 In our project we want to bring more information to people who are new to this sport. The goal will be to first provide them with the most important information about the F1 race sport, such as **the most successful and experienced drivers and teams**, and **the standings of the different seasons**. In the second part, we will present the internationality of the sport and where the focus is according to the different decades, potentially with a **world map showing the circuits**, with statistics like their altitude, best lap time and the driver who performed it, the team with most wins there, and **the drivers and their stats from the different countries**. Finally, to give our users an idea of the evolution of this engineered-focus competition, we would like to  present some technical aspects such as the evolution of lap times and pit stop times.

The goal of this project is to keep the content as readable, simple and entertaining as possible so that readers don't need to have any previous knowledge of the sport to read it, but will gain interest in the sport and potentially become motivated to dig further into the subject.

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

##### Top 10 teams with the most wins of all time:

![Top 10 teams with the most wins of all time](/img/most_team_win.png)


### Related work


> - What others have already done with the data?
> - Why is your approach original?
> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).
> - In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

## Milestone 2 (26th April, 5pm)

**10% of the final grade**


## Milestone 3 (31st May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

