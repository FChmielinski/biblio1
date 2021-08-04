import React from "react";

const Liste = ({setStatus, status}) => {

    const statusHandler = (e) => {
        setStatus(e.target.value);
      }

    return(
        <form>
        <div className="select">

          <select onChange={statusHandler} name="recettes" className="filter-recette">
            <option value="gato">Gâteau au chocolat</option>
            <option value="verrine">Verrine à la framboise</option>
            <option value="pudding">Pudding à la vanille</option>
          </select>

        </div>
      </form>
    );
}

export default Liste;