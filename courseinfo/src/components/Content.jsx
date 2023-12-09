import Part from './Part'

const Content = ({ parts }) => {
    const totalExercises = parts.reduce((acc, p) => acc + p.exercises, 0)
    return (
        <>
            <ul>
                {parts.map(p => <Part key={p.id} part={p} />)}
            </ul>
            <strong>Total of {totalExercises} exercises</strong>
        </>
    )
}

export default Content