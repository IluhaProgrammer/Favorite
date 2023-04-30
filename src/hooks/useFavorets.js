import { useSelector } from "react-redux"

export const useFavorets = () =>  {
    const {favorets} = useSelector(state => state.toolkit)

    return {favorets}
}