import React from 'react';
import { fetchBenches } from '../actions/bench_actions';

class BenchIndex extends React.Component {
    componentDidMount() {
    
      this.props.fetchBenches()
    }
  
    render() {
      
      
      const { benches } = this.props;   
      if (benches === undefined) return <h1>No benches yet!</h1>

      return (
          <div>
              <ul>
                  {
                    Object.values(benches).map(b => (
                            // <BItem/>
                        <li>{b.description}</li>
                        )
                    )
                  }
              </ul>
          </div>
      )
    }
  }

  export default BenchIndex;