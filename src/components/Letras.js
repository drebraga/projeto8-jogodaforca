function Letras({ gameStart, chosedLetter, compareHiddenLetter, error }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <div className="alphabet">
            {alfabeto.map((l) => (
                <input
                    data-test="letter"
                    disabled={(chosedLetter.includes(l) || !gameStart)}
                    type="button"
                    onClick={() => compareHiddenLetter(l, error)}
                    key={l}
                    className={(!chosedLetter.includes(l) && gameStart) ? "letterDisabled letterEnabled" : "letterDisabled"}
                    value={l.toUpperCase()}
                />
            ))}
        </div>
    )
}

export default Letras 