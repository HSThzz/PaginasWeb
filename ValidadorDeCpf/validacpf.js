
//
import { CriaCpf, Valida } from './funcoesValidaCpf.js'

const p1 = new CriaCpf(70548445052)
const p2 = new CriaCpf(39318955805)
const p3 = new CriaCpf(89566122187)
const p4 = new CriaCpf("07098772003") //nao funciona sem ser string pois o js nao aceita o primeiro valor numerico ser 0


Valida(p1.cpf)
Valida(p2.cpf)
Valida(p3.cpf)
Valida(p4.cpf)

