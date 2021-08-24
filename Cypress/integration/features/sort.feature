Feature: Sorting and filtering the Film list

    Scenario Outline: Sort the film list
        Given I am on IMDb charts page
        And I select sort by '<sortBy>'
        Then I can see at least one item in the list
        Examples:
            | sortBy            |
            | Ranking           |
            | IMDb Rating       |
            | Release Date      |
            | Number of Ratings |
            | Your Rating       |

    Scenario Outline: Filter with film genre
        Given I am on IMDb charts page
        And I select the genre '<filterBy>'
        Then I can confirm that there is at least one movie in the list
        Examples:
            | filterBy            |
            | Action              |
            | Adventure           |
            | Animation           |
            | Biography           |
            | Comedy              |
            | Crime               |
            | Drama               |
            | Family              |
            | Fantasy             |
            | Film-Noir           |
            | History             |
            | Horror              |
            | Music               |
            | Musical             |
            | Mystery             |
            | Romance             |
            | Sci-Fi              |
            | Sport               |
            | Thriller            |
            | War                 |
            | Western             |
