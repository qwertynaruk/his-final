import data from "./data.json"

export default (req, res) => {
    res.status(200).json(data)
}
  