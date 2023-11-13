export const getCourses  = (req, res) =>{
    return res.status(200).send({ message:`get all courses ` })
}
export const getCoursesbyid  = (req, res) =>{
    const { id } = req.params
    return res.status(200).send({ message:`get all courses id: ${id}` })
}
export const createCourses= (req, res) =>{
    const { nome, descricao, qtdaluno } = req.body;
    nome.length >= 3 ?
    res.status(201).send({ message: "nome aceito" }) :
    res.status(201).send({ message: "nome invalido" })
    if (!nome || !descricao || !qtdaluno) {
        return res.status(400).send({ message: "falhou " })
    }
    return res.status(200).send({ message: ` Curso: ${nome}, é um curso de ${descricao} tem  ${qtdaluno} alunos` })
}
export const upedate  = (req, res) =>{
    const { id } = req.params;
    const { nome, descricao, qtdaluno } = req.body;
   
if (!nome || !descricao || !qtdaluno) {
    return res.status(400).send({ message: "falhou" })
}
    return res.status(200).send({ message:`editado: ${id}` })

}
export const deleteCurso = (req, res) =>{
    const { id } = req.params;
    return res.status(200).send({ message:`excluido: ${id}` })

}