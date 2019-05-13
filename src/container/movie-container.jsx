import React, { Component } from 'react'
import { selectFilter, textFilter, Comparator  } from 'react-bootstrap-table2-filter';

import Movie from '../component/movie';
import data from '../config/movie.json';

import '../component/movie/movie.css';

export default class MovieContainer extends Component {
  
constructor() {
    super();
    this.state ={
        columns: [],
        data:[],
        selectOptionsGener: {
          'Action': 'Action',
          'Adventure': 'Adventure',
          'Biography': 'Biography',
          'Crime': 'Crime',
          'Drama': 'Drama',
          'Fantasy': 'Fantasy',
          'History': 'History',
          'Romance': 'Romance',
          'Sci-Fi': 'Sci-Fi',
          'Thriller': 'Thriller'
        },
        selectOptionsRating: {
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
        },        
        paginationOption: {
          paginationSize: 3,
          sizePerPage : 5,
          hideSizePerPage : true,
          onPageChange: (page) => {
            this.setState({page: page})
            // console.log('Page change!!!');
            // console.log('Newest size per page:' + sizePerPage);
            // console.log('Newest page:' + page);
          }
        }
    }
}

  componentWillMount() {
    this.setState(
      {
        columns:  [{
            dataField: 'id',
            text: 'SI. No',
            formatter: (cell, row, rowIndex) =>{
              // console.log("cell->"+ cell)
              // console.log(row)
              // console.log("rowIndex->"+ rowIndex)  
              return( 
                <b>{((this.state.page === undefined? 0 : this.state.page - 1) * this.state.paginationOption.sizePerPage) + rowIndex+1}</b>
              )
            },
          }, {
            dataField: 'movie',
            text: 'Movie Title',
            filter: textFilter(),
            // sort: true
          }, {
            dataField: 'gener',
            text: 'Genre',
            formatter: (cell) => cell+'',
            filter:selectFilter({
              options: this.state.selectOptionsGener,
              comparator: Comparator.LIKE,
              placeholder: 'Filter: All'
            }),
            // sort: true
          }, {
            dataField: 'rating',
            text: 'Rating',
            formatter: (cell) => cell,
            filter:selectFilter({
              options: this.state.selectOptionsRating,
              comparator: Comparator.LIKE,
              placeholder: 'Filter: All'
            }),
            sort: true
          }, 
          
          // new column
          // {
          //   dataField: '',
          //   text: 'header',
          // }
        ]
      }
    );
}

componentDidMount() {
    this.setState({data: data.movies})
}
  
render() {
    return (
      <Movie 
        columns={this.state.columns} 
        data={this.state.data}
        paginationOption={this.state.paginationOption}
      />
    )
  }
}
