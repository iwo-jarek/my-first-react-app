const strContains = (StrOne, StrTwo) => {
    if(StrOne.toLowerCase().includes(StrTwo.toLowerCase()))
    return true
    else
    return false;
}

export default strContains;