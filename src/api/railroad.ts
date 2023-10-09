import api from './base';

interface RailwayLocation {
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
};

export const getRailwayLocations = async (railroadCode?: string): Promise<RailwayLocation[]> => {
    try {
        const params = {
            codigoFerrovia: railroadCode,
        }
        const response = await api.post('/obterLocaisFerroviarios', params);
        if(response.status == 200) {
            const railwayLocations:  RailwayLocation[] = response.data;
            return railwayLocations;
        };
        throw new Error('Failed to get informations.');
    } catch(error) {
        throw error;
    };
}