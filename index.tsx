import React from 'react';
import CommonLayout from "@/app/shared/components/layout"; // Importando o layout
import { Input, Typography, Space, Card, Row, Col, Avatar, Switch } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CardDesign = {
    width: '100%',
    border: '1px solid #1890ff',
    borderRadius: '12px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column', // Título na parte superior
    titleStyle: {
        color: '#1890ff',
        fontSize: '16px',
        fontWeight: 'bold',
    }
};

const data = [
  {
        name: 'João Silva',
        dateOfBirth: '15/03/1985',
        gender: 'Male',
        address: 'Rua das Flores, 123, São Paulo, SP',
        cpf: '123.456.789-00',
    },
    {
        name: 'Maria Oliveira',
        dateOfBirth: '22/07/1992',
        gender: 'Female',
        address: 'Avenida Brasil, 456, Rio de Janeiro, RJ',
        cpf: '987.654.321-00',
    },
    {
        name: 'Carlos Souza',
        dateOfBirth: '30/10/1978',
        gender: 'Male',
        address: 'Rua das Palmeiras, 789, Belo Horizonte, MG',
        cpf: '456.789.123-00',
    },
    {
        name: 'Ana Costa',
        dateOfBirth: '05/12/1990',
        gender: 'Female',
        address: 'Praça Central, 101, Salvador, BA',
        cpf: '321.654.987-00',
    }
];

const Avaliadores = () => (
    <CommonLayout>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Title level={3}>Avaliadores</Title>

            <Row align="middle" gutter={16}>
                <Col>
                    <Input 
                        placeholder="Pesquise aqui por avaliadores"
                        prefix={<SearchOutlined />}
                        style={{ width: '500px' }}
                    />
                </Col>
                <Col>
                    <Switch />
                    <span style={{ marginLeft: '8px' }}>Convites Aceitos</span>
                </Col>
                <Col>
                    <Switch />
                    <span style={{ marginLeft: '8px' }}>Convites Recusados</span>
                </Col>
                <Col>
                    <Switch />
                    <span style={{ marginLeft: '8px' }}>Em Aberto</span>
                </Col>
            </Row>

            {data.map((avaliador, index) => (
                <Card
                    key={index}
                    title={<div style={CardDesign.titleStyle}>{avaliador.name}</div>}
                    style={CardDesign}
                >
                    <Row align="middle" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar size={80} icon={<UserOutlined />} />
                        </Col>
                        <Col span={20}>
                            <p><strong>Data de nascimento:</strong> {avaliador.dateOfBirth}</p>
                            <p><strong>Sexo:</strong> {avaliador.gender === 'Male' ? 'Masculino' : 'Feminino'}</p>
                            <p><strong>CPF:</strong> {avaliador.cpf}</p>
                            <p><strong>Endereço:</strong> {avaliador.address}</p>
                        </Col>
                    </Row>
                </Card>
            ))}
        </Space>
    </CommonLayout>
);

export default Avaliadores;
