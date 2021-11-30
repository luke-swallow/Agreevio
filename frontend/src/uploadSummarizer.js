import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('HDOSHNNRSV', 'fe5ffe6f93cfcd34b6269a5cac5bf24f');
const index =  searchClient.initIndex('Agreevio');

const summarizeDomain = 'http://127.0.0.1:5000'

export async function callSummarizer(text){
    let split_text=text.split('\n\n')
    const data ={
        input_text: split_text
    }
    const response = await fetch(summarizeDomain + "/summarizer/json", {
        method: 'POST', 
        mode:"cors",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
      .then(data => {
          debugger
        return data
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      return response.summarized_text;

}


   