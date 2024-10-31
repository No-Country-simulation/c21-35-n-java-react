import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Define una interfaz para el estado y las acciones del store
interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    email: string | null;
    name: string | null;
    rol: string | null;
    errorMessage: string | null;
    login: (payload: { email: string; name: string; rol: string }) => void;
    logout: (errorMessage?: string | null) => void;
    checkingCredentials: () => void;
}

// Crea el store usando la interfaz AuthState y el middleware devtools
const useAuthStore = create<AuthState>()(
    devtools((set) => ({
        status: 'checking',
        email: null,
        name: null,
        rol: null,
        errorMessage: null,

        login: (payload) => set({
            status: 'authenticated',
            email: payload.email,
            name: payload.name,
            rol: payload.rol,
            errorMessage: null
        }),

        logout: (errorMessage = null) => set({
            status: 'not-authenticated',
            email: null,
            name: null,
            rol: null,
            errorMessage
        }),

        checkingCredentials: () => set({
            status: 'checking'
        })

    }), { name: "AuthStore" }) // Aquí está la configuración correcta
);

export default useAuthStore;
