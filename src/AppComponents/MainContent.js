import React, { useState } from 'react'

const MainContent = () => {

    const [color, setColor] = useState("#ffffff")

    let element = document.getElementById("color-display")
    if (element !== null) {
        document.getElementById("color-display").style.backgroundColor = `${color}`
    }

    return (
        <main>
            <div className="row m-0 p-0">
                <div className="col-md-8 mx-auto p-3 my-5">
                <div class="col-md-10 px-3 alert alert-success text-center" role="alert">
  Use <strong className='fs-3'>#</strong> for hex value.
</div>
                    <div className="card py-5 shadow" id='color-display'>
                        <br /><br /><br /><br />
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="color" className='form-label mt-4'>Enter Color Name or Hexcode</label>
                        
                        <input type="text" name="color" id="color" className="form-control mb-3 shadow" onChange={(e) => setColor(e.target.value)} value={color} />
                    </form>
                </div>
            </div>
        </main>
    )
}

export default MainContent
