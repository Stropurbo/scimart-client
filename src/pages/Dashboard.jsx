import StatCard from '../components/Dashboard/StatCard';
import { FiPackage } from 'react-icons/fi';
import Order from '../components/Dashboard/Orders';

const Dashboard = () => {   

    return (
        
            <div>                           
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard icon={FiPackage} title="Total Product" value="245" />
                    <StatCard icon={FiPackage} title="Total Product" value="245" />
                    <StatCard icon={FiPackage} title="Total Product" value="245" />
                    <StatCard icon={FiPackage} title="Total Product" value="245" />
                </div>
                
                <Order />
            </div>      
    );
};

export default Dashboard;