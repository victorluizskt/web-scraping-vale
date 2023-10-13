import api from "../api/base";

interface RailwayLocation {
    message: {
        excessao: null,
        locaisFerroviarios: {
            codigo: string, 
            codigoIBGE: string, 
            descricaoDetalhada: string, 
            descricaoInternet: string, 
            ferroviaOperadora: string, 
            ferroviaProprietaria: string, 
            id: number, 
            sequencia: any, 
            unidadeFederacao: string
        }[];
    }
};

interface ClassPassageSearch {
    message: {
        excessao: null,
        classesPassagem: {
            codigoFerrovia: string;
            id: Int32Array;
            indicadorClasseCadeirante: string;
            nome: string;
        }[]; 
    }
}

export const getRailwayLocations = async (railroadCode?: string): Promise<RailwayLocation> => {
    try {
        const params = {
            codigoFerrovia: railroadCode,
        }
        const response = await api.post('/obterLocaisFerroviarios', params);
        if(response.status == 200) {
            const railwayLocations:  RailwayLocation = response.data;
            return railwayLocations;
        };
        throw new Error('Failed to get informations.');
    } catch(error) {
        throw error;
    };
};
 
export const getClassPassageSearch = async (railroadCode?: string): Promise<ClassPassageSearch> => {
    try {
        const params = {
            codigoFerrovia: railroadCode,
        }
        const response = await api.post('/pesquisaClassePassagem', params);
        if(response.status == 200) {
            const railwayLocations:  ClassPassageSearch = response.data;
            return railwayLocations;
        };
        throw new Error('Failed to get informations.');
    } catch(error) {
        throw error;
    };
};