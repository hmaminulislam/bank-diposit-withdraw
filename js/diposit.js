document.getElementById("btn-diposit").addEventListener("click", function() {
    // Diposit 
    const newDipositInput = document.getElementById("input-diposit");
    const newDipositeString = newDipositInput.value;
    const newDiposite = parseFloat(newDipositeString);
    const prevDipositText = document.getElementById("diposit-display");
    const prevDipositString = prevDipositText.innerText;
    const prevDiposit = parseFloat(prevDipositString);
    const diposit = prevDiposit + newDiposite;
    prevDipositText.innerText = diposit;

    // Blance
    const blance = document.getElementById("blance-display");
    const prevBlanceString = blance.innerText;
    const prevBlance = parseFloat(prevBlanceString);
    const newBlance = prevBlance + newDiposite;
    blance.innerText = newBlance;

    newDipositInput.value = "";
})