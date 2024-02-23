import { Either, left, right } from "./erros/either";
import { NotAllowedError } from "./erros/not-allowed-error";
import { ResourceNotFoundError } from "./erros/resource-not-found-error";

type ProductResponse = {
    name: string,
    age?: number
}

type Response = Either<ResourceNotFoundError | NotAllowedError, ProductResponse>

async function getData({ name, age }: ProductResponse): Promise<Response> {
    if (!name || !age) {
        return left(new ResourceNotFoundError())
    }

    return right({
        name,
        age
    })
}

async function main() {
    const res = await getData({
        name: 'Rafael',

    })

    if (res.isRight()) {
        res.value
    }

    return res.value
}

main().then((res) => {
    console.log(res)
}).catch((err) => {
})