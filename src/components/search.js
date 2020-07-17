import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"

import style from '../styles/sidebar.module.css'

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }
  
  componentDidMount() {
    const inputField = document.querySelector('input[type="text"]')
    const results = document.getElementById('results')
    inputField.addEventListener('focus', (event) => {
      results.style.opacity = '1'
    }, true)
    inputField.addEventListener('blur', (event) => {
      results.style.opacity = '0'
    }, true)
  }

  render() {
    return (
      <div className={style.search}>

        <div className={style.inputbox}>
          <div>Search for:</div><input id="searchinput" type="text" value={this.state.query} onChange={this.search} />
        </div>

        <div id="results" className={style.searchresults}>
          {(this.state.results && this.state.results.length > 0) ? (
            <ul>
              {this.state.results.map(page => (
                <li key={page.id}>
                  <Link to={page.path}>{page.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className={style.noresults}>nothing found</div>
          )}
        </div>

      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}