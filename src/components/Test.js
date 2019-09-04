// Test gi
import React from 'react'

class Test extends React.Component {
    render() {
        return <div>
            <form>
                <label htmlFor="name">
                    <input id="name" type="text" name="password" />
                </label>
                <label htmlFor="pw">
                    <input id="pw" type="password" name="password" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    }
}

export default Test