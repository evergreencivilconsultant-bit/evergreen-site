import React, { useState } from 'react';
import { Layout, Key, ShieldCheck, Download, HardHat, FileText, CheckSquare, Clock } from 'lucide-react';

export default function DashboardMockup() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('evergreen-client');
  const [password, setPassword] = useState('••••••••');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 1200);
  };

  const mockLogs = [
    { date: "May 23, 2026", task: "Column Steel rebar spacing audit - Varanasi Site", status: "Approved by Er. Pandey", code: "IS 456 spacing OK" },
    { date: "May 20, 2026", task: "Slab concrete pouring slump test check - Third floor", status: "Slump value: 110mm - OK", code: "Batch concrete test verified" },
    { date: "May 15, 2026", task: "Excavation foundation depth validation", status: "Approved depth: 4.5m", code: "Load stratum safe" }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--clr-neutral-100)' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <div className="section-header text-center reveal-el active">
          <h2>Client Project Portal</h2>
          <p>
            Experience our institutional-grade consulting transparency. Click the preview button below 
            to simulate what an active client sees on their daily progress dashboard.
          </p>
        </div>

        {/* Outer Frame */}
        <div style={{
          backgroundColor: 'var(--clr-neutral-200)',
          border: '1px solid var(--clr-neutral-300)',
          borderRadius: '28px',
          padding: '45px',
          boxShadow: 'var(--shadow-md)',
          minHeight: '420px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          transition: 'var(--transition-smooth)'
        }} className="estimator-layout">

          {!isLoggedIn ? (
            /* LOGIN SCREEN SCREEN */
            <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%', animation: 'fadeIn 0.5s ease-out' }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--clr-primary-100)',
                  color: 'var(--clr-primary-500)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px'
                }}>
                  <Key size={26} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--clr-primary-800)', marginBottom: '8px' }}>Client Login</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--clr-neutral-600)' }}>
                  Preview our real-time site reporting portal.
                </p>
              </div>

              <form onSubmit={handleLogin}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--clr-primary-800)' }}>Client Username</label>
                    <input 
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: '1px solid var(--clr-neutral-400)',
                        backgroundColor: 'var(--clr-neutral-100)',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--clr-primary-800)' }}>Passcode</label>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: '1px solid var(--clr-neutral-400)',
                        backgroundColor: 'var(--clr-neutral-100)',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn"
                  disabled={loading}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {loading ? 'Entering Portal...' : 'Access Live Dashboard'}
                </button>
              </form>
            </div>
          ) : (
            /* PORTAL DASHBOARD SCREEN */
            <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
              
              {/* Dashboard Top Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '15px',
                borderBottom: '1px solid var(--clr-neutral-300)',
                paddingBottom: '20px',
                marginBottom: '25px'
              }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--clr-primary-500)', fontWeight: '700', letterSpacing: '0.5px' }}>
                    ● ACTIVE PROJECT STATUS
                  </span>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--clr-primary-800)', marginTop: '4px' }}>
                    Ganpati Valley Residency - वाराणसी
                  </h3>
                </div>
                
                <button
                  onClick={() => setIsLoggedIn(false)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid var(--clr-neutral-400)',
                    backgroundColor: 'transparent',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Log Out Panel
                </button>
              </div>

              {/* Progress Indicator Card */}
              <div style={{
                backgroundColor: 'var(--clr-neutral-100)',
                border: '1px solid var(--clr-neutral-300)',
                borderRadius: '16px',
                padding: '20px 25px',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ color: 'var(--clr-primary-500)' }}><Clock size={32} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--clr-primary-800)', margin: 0 }}>Timeline Completion</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--clr-neutral-600)', margin: 0 }}>Phase 4: Upper Slab Casting</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '120px',
                    height: '8px',
                    backgroundColor: 'var(--clr-neutral-300)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ width: '65%', height: '100%', backgroundColor: 'var(--clr-primary-400)' }} />
                  </div>
                  <span style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--clr-primary-700)' }}>65%</span>
                </div>
              </div>

              {/* Grid Content */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '30px',
                alignItems: 'start'
              }} className="estimator-layout">
                
                {/* Site Logs */}
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--clr-primary-800)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <HardHat size={18} /> Daily Site Audit Logs
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {mockLogs.map((log, index) => (
                      <div key={index} style={{
                        backgroundColor: 'var(--clr-neutral-100)',
                        borderLeft: '4px solid var(--clr-primary-400)',
                        borderRadius: '0 8px 8px 0',
                        padding: '12px 15px',
                        boxShadow: 'var(--shadow-sm)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--clr-neutral-600)', marginBottom: '4px' }}>
                          <span>{log.date}</span>
                          <span style={{ fontWeight: '600', color: 'var(--clr-primary-500)' }}>{log.code}</span>
                        </div>
                        <h5 style={{ fontSize: '0.88rem', margin: '0 0 4px 0', color: 'var(--clr-neutral-800)' }}>{log.task}</h5>
                        <p style={{ fontSize: '0.82rem', margin: 0, color: 'var(--clr-primary-600)', fontWeight: '600' }}>✓ {log.status}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drawing Downloads and Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  
                  {/* Downloads Card */}
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--clr-primary-800)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FileText size={18} /> Approved Drawings
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[
                        { title: "Architectural Plans G+3.pdf", size: "4.8 MB" },
                        { title: "Structural Steel Schedule.dwg", size: "8.2 MB" }
                      ].map((file, i) => (
                        <div key={i} style={{
                          backgroundColor: 'var(--clr-neutral-100)',
                          borderRadius: '8px',
                          padding: '10px 14px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: '0.82rem',
                          border: '1px solid var(--clr-neutral-300)'
                        }}>
                          <div>
                            <p style={{ margin: 0, fontWeight: '600', color: 'var(--clr-neutral-800)' }}>{file.title}</p>
                            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--clr-neutral-600)' }}>{file.size}</p>
                          </div>
                          <button 
                            onClick={() => alert(`Simulating file download: ${file.title}`)}
                            style={{
                              backgroundColor: 'transparent',
                              border: 'none',
                              color: 'var(--clr-primary-500)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                            title="Download PDF Drawing"
                          >
                            <Download size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Checklist Card */}
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--clr-primary-800)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckSquare size={18} /> Site Safety Checklist
                    </h4>
                    <div style={{
                      backgroundColor: 'var(--clr-neutral-100)',
                      borderRadius: '12px',
                      padding: '15px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      border: '1px solid var(--clr-neutral-300)'
                    }}>
                      {[
                        { item: "Soil Bearing Strata OK", checked: true },
                        { item: "Columns Placement OK", checked: true },
                        { item: "Beam Reinforcement OK", checked: true },
                        { item: "Electrical Slab conduits", checked: false }
                      ].map((ch, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem' }}>
                          <span style={{ color: ch.checked ? 'var(--clr-primary-400)' : 'var(--clr-neutral-400)', fontWeight: '800' }}>
                            {ch.checked ? '✓' : '○'}
                          </span>
                          <span style={{ textDecoration: ch.checked ? 'line-through' : 'none', color: ch.checked ? 'var(--clr-neutral-600)' : 'var(--clr-neutral-800)' }}>
                            {ch.item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
