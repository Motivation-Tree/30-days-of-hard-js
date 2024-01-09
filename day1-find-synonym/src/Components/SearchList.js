

const SearchList = (props)=> {
    const {allsynonyms} = props;
    return(
        <div>
            <ol>
                { allsynonyms.map((wordName,i) => {
                    return  <li key={i}>{wordName}</li>
                }

                )
                }
            </ol>

            <ul>
      </ul>
        </div>
    );

};

export default SearchList;