

function validateID(id) {
    if (!id) {
        throw "ID is mising!"
    }
  }



function validateName(name) {
    if(!name || name === ""){
        throw 'Name is missing!'
    }

}

 function validateAmount(amount) {
    if(!amount || isNaN(amount) ){
        throw 'Amount must be number'
    }

}


module.exports = {
    validateID,
    validateName,
    validateAmount
};
