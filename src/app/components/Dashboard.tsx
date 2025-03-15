/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState, useEffect } from 'react';


enum LeadStatus {
  PENDING = 'Pending',
  REACHED_OUT = 'ReachedOut'
}

type Lead = {
  id: string;
  name: string;
  submitted: Date;
  status: LeadStatus;
  country: string;
};



export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [status,setStatus] = useState('Status')
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchLeads(1);
  }, [currentPage]);

  const fetchLeads = async (currentPage: number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await response.json();

        const leads: Lead[] = users.map((user: any, index: number) => ({
            id: user.id.toString(),
            name: user.name,
            submitted: new Date(new Date().setDate(new Date().getDate() - index * 5)), 
            status: index % 2 === 0 ? 'PENDING' : 'REACHED_OUT', 
            country: user.address?.city || 'Unknown' 
        }));

        const leadsPerPage = 5;
        const paginatedLeads = leads.slice((currentPage - 1) * leadsPerPage, currentPage * leadsPerPage);

        setLeads(paginatedLeads);
        setTotalPages(Math.ceil(leads.length / leadsPerPage));

    } catch (error) {
        console.error('Error fetching leads:', error);
    }
};

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{background: 'white', minHeight: '100vh', padding: '2rem', color: '#000'}}>
      <div style={{display: 'flex', gap: '2rem'}}>
        <div style={{width: '250px', borderRight: '1px solid #eee', padding: '1rem'}}>
          <h2 style={{marginBottom: '1.5rem' }}>alma</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <button style={{textAlign: 'left', padding: '0.5rem', border: 'none', background: 'none'}}>Leads</button>
            <button style={{textAlign: 'left', padding: '0.5rem', border: 'none', background: 'none'}}>Settings</button>
          </div>
        </div>
        
        <div style={{flex: 1}}>
          <div style={{marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <input
              type="search"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={handleSearch}
              style={{
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                width: '300px'
              }}
            />
        <div style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    background: 'white'
                }}
            >
                {status}
            </button>

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        background: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        marginTop: '0.5rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        zIndex: 10
                    }}
                >
                    <button
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '0.5rem 1rem',
                            border: 'none',
                            background: 'none',
                            textAlign: 'left',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            setStatus(LeadStatus.PENDING);
                            setIsOpen(false);
                        }}
                    >
                        Pending
                    </button>
                    <button
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '0.5rem 1rem',
                            border: 'none',
                            background: 'none',
                            textAlign: 'left',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            setStatus(LeadStatus.REACHED_OUT);
                            setIsOpen(false);
                        }}
                    >
                        Reached Out
                    </button>
                </div>
            )}
        </div>
          </div>

          <table style={{width: '100%', borderCollapse: 'collapse', background: 'white'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #eee'}}>
                <th style={{padding: '1rem', textAlign: 'left'}}>Name</th>
                <th style={{padding: '1rem', textAlign: 'left'}}>Submitted</th>
                <th style={{padding: '1rem', textAlign: 'left'}}>Status</th>
                <th style={{padding: '1rem', textAlign: 'left'}}>Country</th>
              </tr>
            </thead>
            <tbody>
              {(leads as Lead[]).map((lead) => (
                <tr key={lead.id} style={{borderBottom: '1px solid #eee'}}>
                  <td style={{padding: '1rem'}}>{lead.name}</td>
                  <td style={{padding: '1rem'}}>{lead.submitted.toLocaleDateString()}</td>
                  <td style={{padding: '1rem'}}>{lead.status}</td>
                  <td style={{padding: '1rem'}}>{lead.country}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{marginTop: '2rem', display: 'flex', gap: '0.5rem', justifyContent: 'center'}}>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  background: index + 1 === currentPage ? '#0d6efd' : 'white',
                  color: index + 1 === currentPage ? 'white' : 'black'
                }}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
