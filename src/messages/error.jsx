const message = {
    nameDontExists: 'O nome não foi informado',
    emailDontExists: 'É preciso informar um email',
    passwordDontExists: 'A senha é essencial para segurança da sua conta',
    confirmPasswordDontExists: 'É preciso confirmar sua senha para a segurança da sua conta',
    passwordsAreNotTheSame: 'As senhas são divengentes'

}

// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado

export default message;