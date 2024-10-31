import useAuthStore from "@/store/useAuthStore";


export const createNewUserWithEmailAndPassword = async ({ name, email, password, rol }: { name: string, email: string, password: string, rol: string }) => {
    try {
        const response = await fetch("https://c21-35-n-java-react-production-3df3.up.railway.app/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, rol }),
        });

        if (!response.ok) {
            throw new Error("Error en el registro");
        }

        const data = await response.json();
        console.log({ data })

        const token = data.token
        localStorage.setItem("token", data.token);


        return {
            ok: true,
            token,
            rol,
            name,
            email,
        };

    } catch (err) {
        return { ok: false, msg: 'Error al crear un nuevo usuario' }
    }
}


export const loginWithEmailPassword = async ({ email, password }: { email: string, password: string }) => {
    try {
        const response = await fetch("https://c21-35-n-java-react-production-3df3.up.railway.app/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log({ data })

        if (!response.ok) {
            return { ok: false, errorMessage: data.message || "Error en la autenticación" };
        }

        const { token, rol, name } = data; // Asumiendo que tu API devuelve un token y un rol

        return {
            ok: true,
            token, // Devuelve el token
            rol,
            name,  // Devuelve el rol
            email, // Devuelve el email (opcional)
        };

    } catch (error) {
        return { ok: false, errorMessage: 'Problemas' };
    }
};

export const logoutProvider = () => {
    try {
        useAuthStore.getState().logout()
        return { ok: true }
    } catch (error) {
        return { ok: false, msg: 'Error al intentar cerrar sesion' }
    }
} 