import React, { Component } from 'react';
import './App.css';
import Countrys from './Countrys'


class App extends Component {
  state = {
    countrys: [
      {id: 1, name: 'USA', select: false},
      {id: 2, name: 'Israel', select: false},
      {id: 3, name: 'Italy', select: false},
      {id: 4, name: 'Spain', select: false},
      {id: 5, name: 'China', select: false},
      {id: 6, name: 'Germany', select: false},
      {id: 7, name: 'Iran', select: false},
      {id: 8, name: 'France', select: false},
      {id: 9, name: 'Astria', select: false},
      {id: 10, name: 'South Korea', select: false},
      {id: 11, name: 'United Kingdom', select: false},
      {id: 12, name: 'Turkey', select: false},
      {id: 13, name: 'Portugal', select: false}
    ]
  }
  
  // addTodo = (todo) => {
  //   todo.id = Math.random()
  //   let todos = [...this.state.todos, todo]
  //   this.setState({
  //     todos
  //   })
  // }
  
  checkCountry = (id) => {
    const countrys = this.state.countrys.filter(country => {
      if(country.id === id){        
        if(country.select){
          country.select = false
        } else {
          country.select = true
        }
      }
      return true
    })
    this.setState({
      countrys
    })
  } 

  sendCountrys = () =>{
    if (window.confirm('Are you sure you want to send?')) {
      const countrys = this.state.countrys.filter(country => {
        return country.select
      })
     
      //send the countrys
    } 
    
  }
  render(){
    return(
      <div className='App'>
        <h1>Countrys:</h1>
        <Countrys countrys={this.state.countrys} checkCountry={this.checkCountry}/>
        <div ><button onClick={() => {this.sendCountrys()}}>send!</button></div>
        </div>

    )
  }
 
}

export default App;








// Afghanistan', select: false},
// Albania', select: false},'
// Algeria', select: false},
// Andorra', select: false},
// Angola', select: false},
// Anguilla', select: false},
// Antigua and Barbuda', select: false},
// Argentina', select: false},
// Armenia', select: false},
// Aruba', select: false},
// Australia', select: false},
// Austria', select: false},
// Azerbaijan', select: false},
// Bahamas', select: false},
// Bahrain', select: false},
// Bangladesh', select: false},
// Barbados', select: false},
// Belarus', select: false},
// Belgium', select: false},
// Belize', select: false},
// Benin', select: false},
// Bermuda', select: false},
// Bhutan', select: false},
// Bolivia', select: false},
// Bosnia and Herzegovina', select: false},
// Brazil', select: false},
// British Virgin Islands', select: false},
// Brunei', select: false},
// Bulgaria', select: false},
// Burkina Faso', select: false},
// Cabo Verde', select: false},
// Cambodia', select: false},
// Cameroon', select: false},
// Canada', select: false},
// Cayman Islands', select: false},
// Central African Republic', select: false},
// Chad', select: false},
// Channel Islands', select: false},
// Chile', select: false},
// China', select: false},
// Colombia', select: false},
// Congo', select: false},
// Costa Rica', select: false},
// Croatia', select: false},
// Cuba', select: false},
// Curaçao', select: false},
// Cyprus', select: false},
// Czech Republic (Czechia)', select: false},
// Côte d Ivoire', select: false},
// Denmark', select: false},
// Djibouti', select: false},
// Dominica', select: false},
// Dominican Republic', select: false},
// DR Congo', select: false},
// Ecuador', select: false},
// Egypt', select: false},
// El Salvador', select: false},
// Equatorial Guinea', select: false},
// Eritrea', select: false},
// Estonia', select: false},
// Eswatini', select: false},
// Ethiopia', select: false},
// Faeroe Islands', select: false},
// Fiji', select: false},
// Finland', select: false},
// France', select: false},
// French Guiana', select: false},
// French Polynesia', select: false},
// Gabon	', select: false},
// Gambia', select: false},
// Georgia', select: false},
// Germany', select: false},
// Ghana', select: false},
// Gibraltar', select: false},
// Greece', select: false},
// Greenland', select: false},
// Grenada', select: false},
// Guadeloupe', select: false},
// Guatemala', select: false},
// Guinea', select: false},
// Guinea-Bissau', select: false},
// Guyana', select: false},
// Haiti', select: false},
// Holy See', select: false},
// Honduras', select: false},
// Hong Kong', select: false},
// Hungary', select: false},
// Iceland', select: false},
// India', select: false},
// Indonesia', select: false},
// Iran', select: false},
// Iraq', select: false},
// Ireland', select: false},
// Isle of Man', select: false},
// Israel
// Italy
// Jamaica
// Japan
// Jordan
// Kazakhstan
// Kenya
// Kuwait
// Kyrgyzstan
// Laos
// Latvia
// Lebanon
// Liberia
// Libya
// Liechtenstein
// Lithuania
// Luxembourg
// Macao
// Madagascar
// Malaysia
// Maldives
// Mali
// Malta
// Martinique
// Mauritania
// Mauritius
// Mayotte
// Mexico
// Moldova
// Monaco
// Mongolia
// Montenegro
// Montserrat
// Morocco
// Mozambique
// MS Zaandam
// Myanmar
// Namibia
// Nepal
// Netherlands
// New Caledonia
// New Zealand
// Nicaragua
// Niger
// Nigeria
// North Macedonia
// Norway
// Oman
// Pakistan
// Panama
// Papua New Guinea
// Paraguay
// Peru
// Philippines
// Poland
// Portugal
// Qatar
// Romania
// Russia
// Rwanda
// Réunion
// Saint Barthelemy
// Saint Kitts & Nevis
// Saint Lucia	9	0	North America
// Saint Martin	15	1	North America
// San Marino	230	25	Europe
// Saudi Arabia	1,453	8	Asia
// Senegal	162	0	Africa
// Serbia	785	16	Europe
// Seychelles	8	0	Africa
// Singapore	879	3	Asia
// Sint Maarten	6	0	North America
// Slovakia	336	0	Europe
// Slovenia	756	11	Europe
// Somalia	3	0	Africa
// South Africa	1,280	2	Africa
// South Korea	9,661	158	Asia
// Spain	85,195	7,340	Europe
// Sri Lanka	122	2	Asia
// St. Vincent & Grenadines	1	0	North America
// State of Palestine	115	1	Asia
// Sudan	6	2	Africa
// Suriname	8	0	South America
// Sweden	4,028	146	Europe
// Switzerland	15,526	333	Europe
// Syria	9	1	Asia
// Taiwan	306	5	Asia
// Tanzania	19	0	Africa
// Thailand	1,524	9	Asia
// Timor-Leste	1	0	Asia
// Togo	30	1	Africa
// Trinidad and Tobago	82	3	North America
// Tunisia	312	8	Africa
// Turkey	9,217	131	Asia
// Turks and Caicos	4	0	North America
// Uganda	33	0	Africa
// Ukraine	480	11	Europe
// United Arab Emirates	611	5	Asia
// United Kingdom	19,522	1,228	Europe
// United States	143,249	2,499	North America
// Uruguay	304	1	South America
// Uzbekistan	149	2	Asia
// Venezuela	129	3	South America
// Vietnam	203	0	Asia
// Zambia	35	0	Africa
// Zimbabwe