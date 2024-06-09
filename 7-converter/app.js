function summ (amount, sourceCurrency, targetCurrency) {
    switch (sourceCurrency) {  
        case 'RUB': switch (targetCurrency) {  
            case 'USD': return amount / 89.7619;  
            case 'EUR': return amount / 97.9126;  
            case 'GBP': return amount / 113.6027;  
            default: return null;   
        }  
        case 'USD': switch (targetCurrency) {  
            case 'RUB': return amount * 89.7619;  
            case 'EUR': return amount * 0.9168;  
            case 'GBP': return amount * 0.7901;  
            default: return null;  
        }  
        case 'EUR': switch (targetCurrency) {  
            case 'RUB': return amount * 97.9126;  
            case 'USD': return amount * 1.0908;  
            case 'GBP': return amount * 0.8619;  
            default: return null;  
        }  
        case 'GBP': switch (targetCurrency) {  
            case 'RUB': return amount * 113.6027;  
            case 'USD': return amount * 1.2656;  
            case 'EUR': return amount * 1.1602;  
            default: return null;  
        }  
        default:  
            return null;  
    }  
};

console.log(summ(1000, 'RUB', 'USD'));